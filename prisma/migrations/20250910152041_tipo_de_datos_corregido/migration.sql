/*
  Warnings:

  - The `precio_unitario_1` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `precio_unitario_2` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `precio_unitario_3` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `precio_unitario_4` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `precio_unitario_5` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."solicitudes_compra" DROP COLUMN "precio_unitario_1",
ADD COLUMN     "precio_unitario_1" DOUBLE PRECISION,
DROP COLUMN "precio_unitario_2",
ADD COLUMN     "precio_unitario_2" DOUBLE PRECISION,
DROP COLUMN "precio_unitario_3",
ADD COLUMN     "precio_unitario_3" DOUBLE PRECISION,
DROP COLUMN "precio_unitario_4",
ADD COLUMN     "precio_unitario_4" DOUBLE PRECISION,
DROP COLUMN "precio_unitario_5",
ADD COLUMN     "precio_unitario_5" DOUBLE PRECISION,
ALTER COLUMN "costo_total_de_la_compra" SET DATA TYPE DOUBLE PRECISION;
