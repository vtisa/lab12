export interface Producto {
    _id: number;
    nombre: string;
    precio: number;
    descripcion: string;
    imagen: string;
    categoria: { _id: number};
}
  