# Quiz WebSocket

Un jeu de quiz interactif utilisant WebSocket pour la communication en temps réel entre le serveur et les clients. Les utilisateurs peuvent rejoindre ou créer un lobby, répondre à des questions de quiz en temps réel, et suivre les résultats du jeu en direct.

## Prérequis

Avant de commencer, assurez-vous que vous avez installé les outils suivants :

- **Node.js** (version 14 ou supérieure)
- **npm** (version 6 ou supérieure)

## Installation

### 1. Cloner le dépôt

Clonez ce projet sur votre machine locale à l'aide de Git :

```bash
git clone https://github.com/rthimoth/Quiz
```

### 2. Installer les dépendances

Naviguez dans le répertoire du projet et installez les dépendances avec npm :

```bash
cd quiz
npm install
```

```bash
cd ../API
npm install
```

### 3. Démarrer l'application

Pour démarrer l'application en mode développement, exécutez la commande suivante :

```bash
npm run dev
```

Cela lancera l'application sur http://localhost:5173 dans votre navigateur.

Copier le .env reçu de la part de Erwan SINCK sur teams dans /API

```bash
cd ../API
npm run dev
```

Cela lancera l'API sur http://localhost:20904/.


## Structure du projet

Voici la structure des fichiers du projet :

```bash
/API
│
├── /src                   # Contient le code source de l'API
│   ├── /controllers       # Gestion des fonctions de l'API
│   ├── /db                # Connexion de la database
│   ├── /models            # Schema de l'API
│   ├── /routes            # Routes de l'API
│   └── /index.js          # Point d'entrée de l'API
├── package.json           # Dépendances et scripts du projet
/quiz-websocket
│
├── /public                # Contient les fichiers statiques comme index.html
├── /src                   # Contient le code source de l'application
│   ├── /assets            # Images et fonts de l'application
│   ├── /components        # Composants réutilisables (ex: Button, Input, etc.)
│   ├── /pages             # Pages principales (ex: Home, Lobby, etc.)
│   ├── /styles            # Style du quiz
│   ├── /App.tsx           # Composant principal
│   └── /index.tsx         # Point d'entrée de l'application
├── package.json           # Dépendances et scripts du projet
- README.md              # Documentation de l'application
```

### Fonctionnalités

- Lobby de jeu : Les utilisateurs peuvent créer un lobby, choisir les paramètres de jeu et créer leurs propres questions.

- Questions de quiz : Les utilisateurs répondent à des questions de quiz à choix multiples ou en saisissant une réponse dans un champ de texte.

### Technologies utilisées

- React : Framework JavaScript pour la construction de l'interface utilisateur.

- TypeScript : Pour une meilleure gestion des types et des erreurs.

- WebSocket : Pour la communication en temps réel entre le client et le serveur.

- Tailwind CSS : Framework CSS utilitaire pour des styles rapides et réactifs.

- React Router : Pour la gestion des routes dans l'application.

- ExpressJS : Pour la gestion de l'API.

- MongoDB : Pour la gestion de la base de donnée.

### Auteurs

[FATH Maël](https://github.com/maelft), [RANVIN Thimothee](https://github.com/rthimoth), [SINCK Erwan](https://github.com/erxide)


``Vous pourrez trouver la version websocket dans la branch 'websocket'``