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
  @Input() profesion: string = ''; // Campo opcional para profesiones
  @Input() imagen: string = '';
  @Input() precio: number = 0;
  @Input() mostrarTitulo: boolean = true;
  @Input() mostrarBotonCarrito: boolean = false; // Indica si se debe mostrar el botón de carrito
  @Input() mostrarControlesCarrito: boolean = false; // Para los controles de cantidad
  @Input() mostrarProfesion: boolean = false;
  @Input() mostrarPrecio: boolean = false; // Indica si se debe mostrar la profesión
  @Input() cantidad: number = 0;

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
}



