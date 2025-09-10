/* eslint-disable prettier/prettier */
import { IsString, IsOptional, IsDateString, IsNumber } from 'class-validator';

export class CreateSolicitudCompraDto {
  @IsNumber()
  id: number
  
  @IsOptional()
  @IsDateString()
  hora_de_inicio?: string;

  @IsOptional()
  @IsDateString()
  hora_de_finalizacion?: string;

  @IsString()
  correo_electronico: string;

  @IsString()
  nombre: string;

  @IsString()
  planta: string;

  @IsString()
  departamento: string;

  @IsString()
  tipo_de_compra: string;

  @IsString()
  concepto_de_gasto: string;

  @IsString()
  tipo_de_rc: string;

  @IsString()
  adjuntar_cotizaciones: string;

  @IsNumber()
  cantidad_1: number;

  @IsString()
  unidad_de_medida_1: string;

  @IsString()
  descripcion_del_articulo_1: string;

  @IsString()
  uso_1: string;

  @IsNumber()
  precio_unitario_1: number;

  @IsString()
  proveedor_opcion_1_1: string;

  @IsString()
  proveedor_opcion_2_1: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_1?: string;

  @IsString()
  quieres_agregar_otro_articulo_1: string;

  @IsOptional()
  @IsNumber()
  cantidad_2?: number;

  @IsOptional()
  @IsString()
  unidad_de_medida_2?: string;

  @IsOptional()
  @IsString()
  descripcion_del_articulo_2?: string;

  @IsOptional()
  @IsString()
  uso_2?: string;

  @IsOptional()
  @IsNumber()
  precio_unitario_2?: number;

  @IsOptional()
  @IsString()
  proveedor_opcion_1_2?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_2_2?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_2?: string;

  @IsOptional()
  @IsString()
  quieres_agregar_otro_articulo_2?: string;

  @IsOptional()
  @IsNumber()
  cantidad_3?: number;

  @IsOptional()
  @IsString()
  unidad_de_medida_3?: string;

  @IsOptional()
  @IsString()
  descripcion_del_articulo_3?: string;

  @IsOptional()
  @IsString()
  uso_3?: string;

  @IsOptional()
  @IsNumber()
  precio_unitario_3?: number;

  @IsOptional()
  @IsString()
  proveedor_opcion_1_3?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_2_3?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_3?: string;

  @IsOptional()
  @IsString()
  quieres_agregar_otro_articulo_3?: string;

  @IsOptional()
  @IsNumber()
  cantidad_4?: number;

  @IsOptional()
  @IsString()
  unidad_de_medida_4?: string;

  @IsOptional()
  @IsString()
  descripcion_del_articulo_4?: string;

  @IsOptional()
  @IsString()
  uso_4?: string;

  @IsOptional()
  @IsNumber()
  precio_unitario_4?: number;

  @IsOptional()
  @IsString()
  proveedor_opcion_1_4?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_2_4?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_4?: string;

  @IsOptional()
  @IsString()
  quieres_agregar_otro_articulo_4?: string;

  @IsOptional()
  @IsNumber()
  cantidad_5?: number;

  @IsOptional()
  @IsString()
  unidad_de_medida_5?: string;

  @IsOptional()
  @IsString()
  descripcion_del_articulo_5?: string;

  @IsOptional()
  @IsString()
  uso_5?: string;

  @IsOptional()
  @IsNumber()
  precio_unitario_5?: number;

  @IsOptional()
  @IsString()
  proveedor_opcion_1_5?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_2_5?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_5?: string;

  @IsNumber()
  costo_total_de_la_compra: number;

  @IsString()
  comentarios: string;

}