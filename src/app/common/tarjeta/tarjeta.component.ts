import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagen: string = '';
  @Input() precio: number = 0;
  @Input() mostrarTitulo: boolean = true;
  @Input() mostrarBotonCarrito: boolean = false; 
  @Input() mostrarControlesCarrito: boolean = false; 
  @Input() mostrarPrecio: boolean = false;
  @Input() cantidad: number = 0;
  @Input() descuento: boolean = false;

  @Output() agregarCarrito = new EventEmitter<void>();
  @Output() incrementarCantidad = new EventEmitter<void>();
  @Output() decrementarCantidad = new EventEmitter<void>();

  incrementar(): void {
    this.incrementarCantidad.emit();
  }

  decrementar(): void {
    this.decrementarCantidad.emit();
  }

  agregar(): void {
    this.agregarCarrito.emit();
  }

   get precioConDescuento(): number {
    return this.descuento ? this.precio - 20 : this.precio; 
  }

  get precioOriginal(): number {
    return this.precio;
  }
}



