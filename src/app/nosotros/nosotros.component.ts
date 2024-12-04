import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  equipo = [
    {
      nombre: 'Mónica Romero Zavaleta',
      rol: 'Barista Creativa',
      descripcion: 'Apasionada por crear la taza de café perfecta, llena de arte y sabor.',
      imagen: 'assets/chica2.jpg'
    },
    {
      nombre: 'Auria Celeste Perez',
      rol: 'Chef Repostero',
      descripcion: 'Maestro en hornear delicias que complementan cada sorbo de café.',
      imagen: 'assets/chica2.jpg'
    },
    {
      nombre: 'Yaseni Esquivel Zandoval',
      rol: 'Encargada de Atención al Cliente',
      descripcion: 'Con una sonrisa, asegura que cada visita sea cálida y memorable.',
      imagen: 'assets/chica2.jpg'
    },
    {
      nombre: 'Isai Valqui Trauco',
      rol: 'Tostador de Café',
      descripcion: 'Selecciona los mejores granos y los tuesta con maestría para realzar su esencia.',
      imagen: 'assets/chica2.jpg'
    }
  ];
}
