/* eslint-disable prettier/prettier */
import { 
  IsString, 
  IsInt, 
  IsOptional, 
  IsEmail, 
  IsNumber, 
  IsDateString 
} from 'class-validator';

export class CreateRciDto {
  @IsInt()
  id: number;

  @IsOptional()
  @IsDateString()
  start_time?: Date;

  @IsOptional()
  @IsDateString()
  completion_time?: Date;

  @IsOptional()
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  planta?: string;

  @IsOptional()
  @IsString()
  departamento?: string;

  @IsOptional()
  @IsString()
  departamento1?: string;

  @IsOptional()
  @IsNumber()
  cantidad_1?: number;

  @IsOptional()
  @IsString()
  unidad_de_medida_1?: string;

  @IsOptional()
  @IsString()
  descripcion_del_articulo_1?: string;

  @IsOptional()
  @IsString()
  uso_1?: string;

  @IsOptional()
  @IsNumber()
  precio_unitario_1?: number;

  @IsOptional()
  @IsString()
  proveedor_opcion_1_1?: string;

  @IsOptional()
  @IsString()
  quieres_agregar_otro_articulo?: string;

  @IsOptional()
  @IsNumber()
  precio_unitario_2?: number;

  @IsOptional()
  @IsString()
  descripcion_del_articulo_2?: string;

  @IsOptional()
  @IsString()
  uso_2?: string;

  @IsOptional()
  @IsString()
  unidad_de_medida_2?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_1_2?: string;

  @IsOptional()
  @IsString()
  quieres_agregar_otro_articulo2?: string;

  @IsOptional()
  @IsString()
  descripcion_del_articulo_3?: string;

  @IsOptional()
  @IsString()
  unidad_de_medida_3?: string;

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
  quieres_agregar_otro_articulo3?: string;

  @IsOptional()
  @IsString()
  uso_4?: string;

  @IsOptional()
  @IsString()
  unidad_de_medida_4?: string;

  @IsOptional()
  @IsString()
  descripcion_del_articulo_4?: string;

  @IsOptional()
  @IsNumber()
  precio_unitario_4?: number;

  @IsOptional()
  @IsString()
  quieres_agregar_otro_articulo4?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_1_4?: string;

  @IsOptional()
  @IsNumber()
  cantidad_2?: number;

  @IsOptional()
  @IsNumber()
  cantidad_3?: number;

  @IsOptional()
  @IsNumber()
  cantidad_4?: number;

  @IsOptional()
  @IsNumber()
  cantidad_5?: number;

  @IsOptional()
  @IsString()
  descripcion_del_articulo_5?: string;

  @IsOptional()
  @IsNumber()
  precio_unitario_5?: number;

  @IsOptional()
  @IsString()
  unidad_de_medida_5?: string;

  @IsOptional()
  @IsString()
  uso_5?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_1_5?: string;

  @IsOptional()
  @IsString()
  quieres_agregar_otro_articulo5?: string;

  @IsOptional()
  @IsNumber()
  costo_total_de_la_compra?: number;

  @IsOptional()
  @IsString()
  moneda?: string;

  @IsOptional()
  @IsString()
  concepto_de_gasto?: string;

  @IsOptional()
  @IsString()
  responsable_del_area?: string;

  @IsOptional()
  @IsString()
  tipo_de_rci?: string;

  @IsOptional()
  @IsString()
  adjuntar_cotizaciones2?: string;

  @IsOptional()
  @IsString()
  comentarios?: string;

  @IsOptional()
  @IsString()
  tipo_de_compra?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_2_1?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_1?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_2_2?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_2?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_2_3?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_3?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_2_4?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_4?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_2_5?: string;

  @IsOptional()
  @IsString()
  proveedor_opcion_3_5?: string;
}
