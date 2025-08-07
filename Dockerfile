FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Utiliser le serveur "serve" pour héberger les fichiers de production
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "3000"]