const C = "mediatheque-v2";

self.addEventListener("install", e => e.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(
  caches.keys().then(keys => Promise.all(keys.filter(k => k !== C).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
));

self.addEventListener("fetch", e => {
  // Page principale : réseau d'abord, cache en secours (hors ligne)
  if (e.request.mode === "navigate") {
    e.respondWith(
      fetch(e.request).then(r => {
        const cp = r.clone();
        caches.open(C).then(c => c.put(e.request, cp));
        return r;
      }).catch(() => caches.match(e.request))
    );
    return;
  }
  // Images et fichiers : cache d'abord (plus rapide), mise à jour en fond
  e.respondWith(
    caches.open(C).then(async c => {
      const hit = await c.match(e.request);
      const net = fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })
  );
});
