import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VentaService } from '../../services/venta.service';
import { Venta } from '../models/venta.model';


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  @Input() carrito: any[] = [];
  @Output() carritoActualizado = new EventEmitter<any[]>();

  mostrarCarrito = false;
  mostrarModalPago = false;
  mensajeCompra = false;

  constructor(private ventaService: VentaService) { }

  // Eliminar un producto del carrito
  eliminarDelCarrito(id: number) {
    this.carrito = this.carrito.filter(item => item.id !== id);
    this.carritoActualizado.emit(this.carrito);
  }

  // Vaciar el carrito
  vaciarCarrito() {
    this.carrito = [];
    this.carritoActualizado.emit(this.carrito);
  }

  // Calcular el total del carrito
  calcularTotal() {
    return this.carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  }

  // Mostrar u ocultar el carrito
  toggleCarrito() {
    this.mostrarCarrito = !this.mostrarCarrito;
  }

  confirmarCompra(event: Event) {
    event.preventDefault();
  
    // Validar que el carrito no esté vacío
    if (this.carrito.length === 0) {
      console.error('El carrito está vacío, no se puede realizar la compra.');
      return;
    }
  
    // Construir los datos de las ventas
    const ventas = this.carrito.map(producto => ({
      productoId: producto._id, 
      cantidad: producto.cantidad,
    }));
  
    console.log('Datos enviados al backend:', ventas);
  
    // Llamar al servicio para realizar el POST
    this.ventaService.postVentas(ventas).subscribe(
      (response) => {
        console.log('Compra realizada exitosamente:', response);
        this.mostrarModalPago = false;
        this.mensajeCompra = true;
        setTimeout(() => {
          this.mensajeCompra = false;
          this.vaciarCarrito(); // Vaciar el carrito después de la compra
        }, 1000);
      },
      (error) => {
        console.error('Error al realizar la compra:', error);
      }
    );
  }
  

  // Cerrar el modal de pago
  cerrarModalPago() {
    this.mostrarModalPago = false;
  }
}