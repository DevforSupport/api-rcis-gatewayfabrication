FROM node:21-alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade

COPY package*.json ./

RUN npm install

COPY . .

# Generar cliente de Prisma ahora que sí existe schema.prisma
RUN npx prisma generate

# Compilar la app NestJS
RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
