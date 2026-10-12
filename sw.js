const C = "mediatheque-v1";
self.addEventListener("install", e => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.open(C).then(async c =>
      (await c.match(e.request)) || fetch(e.request).then(r => { c.put(e.request, r.clone()); return r; })
    )
  );
});
