FROM node:21-alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade

COPY package*.json ./

RUN npm install

COPY . .

RUN npx prisma generate && npx prisma migrate deploy
# Compilar la app NestJS
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
