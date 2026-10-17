# Ma médiathèque : application Android (APK)

Tu n'as rien à installer sur ton ordinateur : GitHub construit l'application pour toi, gratuitement.

1. Crée un compte sur https://github.com puis un dépôt **privé** (New repository, coche Private).
2. Envoie-y **tout le contenu de ce dossier** (glisse les fichiers dans « uploading an existing file »). Le dossier caché `.github` doit y être aussi : s'il n'apparaît pas, utilise le bouton Add file → Create new file et nomme-le `.github/workflows/build-apk.yml`, puis colles-y le contenu du fichier.
3. Ouvre l'onglet **Actions** : « Construire l'APK » démarre seul (5 à 8 minutes). Sinon, clique dessus puis **Run workflow**.
4. Quand c'est vert, ouvre l'exécution et télécharge **ma-mediatheque-apk** tout en bas (Artifacts). Décompresse : tu obtiens `app-debug.apk`.
5. Envoie l'APK sur ton téléphone, ouvre-le et autorise « installer des applications inconnues » si Android le demande.

L'appli fonctionne ensuite sans internet (sauf la recherche TMDB). Tes données restent sur le téléphone. Pour la mettre à jour, remplace `www/index.html` dans le dépôt : un nouvel APK est construit.
