# Ma médiathèque

Ma collection de films, séries, mangas, BD et albums, sous forme d'appli de téléphone (une seule page, sans IA).

## Mettre l'appli en ligne avec GitHub Pages

1. Crée un compte gratuit sur https://github.com si besoin.
2. Clique sur **New repository** (bouton « + » en haut à droite). Nom : `mediatheque` (par exemple), visibilité **Public**, puis **Create repository**.
3. Clique sur **uploading an existing file**, puis glisse **tous les fichiers de ce dossier** (`index.html`, `icon.svg`, `icon-180.png`, `icon-512.png`, `manifest.webmanifest`, `.nojekyll`, `README.md`). Valide avec **Commit changes**.
4. Va dans **Settings → Pages**. Sous « Build and deployment », choisis **Deploy from a branch**, branche **main**, dossier **/ (root)**, puis **Save**.
5. Après 1 à 2 minutes, ton appli est disponible à l'adresse :
   `https://TON-PSEUDO.github.io/mediatheque/`

## Sur ton téléphone

- iPhone (Safari) : Partager → **Sur l'écran d'accueil**.
- Android (Chrome) : menu ⋮ → **Ajouter à l'écran d'accueil**.

## Bon à savoir

- **Tes données restent dans le navigateur** de l'appareil utilisé (stockage local). Elles ne sont pas partagées entre ton téléphone et ton ordinateur, et seraient perdues si tu effaces les données du site. Les films n'apparaissent pas dans le dépôt GitHub : l'adresse publique ne montre que l'appli vide.
- **Infos et affiches automatiques (films et séries)** : Paramètres → colle ta clé gratuite TMDB (https://www.themoviedb.org/settings/api). Elle reste sur ton appareil.
- Pour les mangas, BD et albums, les infos se saisissent à la main.
- Pour mettre à jour l'appli plus tard : remplace `index.html` dans le dépôt.

Ce produit utilise l'API TMDB mais n'est ni soutenu ni certifié par TMDB.
