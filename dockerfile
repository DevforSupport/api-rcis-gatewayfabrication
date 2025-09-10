FROM node:21-alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000
# Compilar la app NestJS
RUN npm run build

CMD ["npm", "run", "start:prod"]
