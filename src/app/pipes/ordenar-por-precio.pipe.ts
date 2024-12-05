import { Pipe, PipeTransform } from '@angular/core';
import { Producto } from '../models/producto.model';

@Pipe({
  name: 'ordenarPorPrecio',
  standalone: true
})
export class OrdenarPorPrecioPipe implements PipeTransform {

  transform(productos: Producto[], orden: string | null): Producto[] {
    if (!orden) {
      return productos;  
    }
    
    // Ordena productos por precio
    return productos.sort((a, b) => {
      if (orden === 'asc') {
        return a.precio - b.precio; 
      } else {
        return b.precio - a.precio; 
      }
    });
  }
}




