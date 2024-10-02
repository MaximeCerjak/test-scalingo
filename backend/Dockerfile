# Utilise l'image de base node:20-alpine
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /srv/app

# Copier le package.json et le yarn.lock pour installer les dépendances
COPY package.json yarn.lock ./

# Installer les dépendances de l'application
RUN yarn install

# Copier le reste des fichiers du projet
COPY . .

# Exposer le port 1337 pour Strapi
EXPOSE 1337

# Définir la commande de démarrage de Strapi
CMD ["yarn", "strapi" ,"develop"]