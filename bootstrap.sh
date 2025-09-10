#!/bin/sh
echo "Esperando a que la base de datos esté lista..."
until pg_isready -h $DATABASE_HOST -p $DATABASE_PORT -U $DATABASE_USER; do
  sleep 2
done
echo "Base de datos lista, generando Prisma y aplicando migraciones..."
npx prisma generate
npx prisma migrate deploy
echo "Iniciando NestJS..."
node dist/main.js
