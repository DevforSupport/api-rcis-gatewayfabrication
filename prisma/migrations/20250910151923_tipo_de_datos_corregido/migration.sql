/*
  Warnings:

  - The `cantidad_1` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cantidad_2` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cantidad_3` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cantidad_4` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `cantidad_5` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `costo_total_de_la_compra` column on the `solicitudes_compra` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "public"."solicitudes_compra" DROP COLUMN "cantidad_1",
ADD COLUMN     "cantidad_1" INTEGER,
DROP COLUMN "cantidad_2",
ADD COLUMN     "cantidad_2" INTEGER,
DROP COLUMN "cantidad_3",
ADD COLUMN     "cantidad_3" INTEGER,
DROP COLUMN "cantidad_4",
ADD COLUMN     "cantidad_4" INTEGER,
DROP COLUMN "cantidad_5",
ADD COLUMN     "cantidad_5" INTEGER,
DROP COLUMN "costo_total_de_la_compra",
ADD COLUMN     "costo_total_de_la_compra" INTEGER;
