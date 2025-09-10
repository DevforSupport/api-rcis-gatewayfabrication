FROM node:21-alpine

WORKDIR /usr/src/app

RUN apk update && apk upgrade

COPY package*.json ./
RUN npm install

COPY . .

# No generar Prisma ni migrar aquí
# RUN npx prisma generate && npx prisma migrate deploy

RUN npm run build

EXPOSE 3000

# Ejecutar Prisma en runtime
CMD ["sh", "-c", "npx prisma generate && npx prisma migrate deploy && node dist/main.js"]
