export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  precio_con_descuento: number;
  imagen: string;
  disponibilidad: boolean;
  cantidad?: number;
}
