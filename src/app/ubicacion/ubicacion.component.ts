import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ubicacion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent {
  ubicaciones = [
    {
      ciudad: 'Ciudad Central',
      direccion: 'Avenida Principal 123, Centro',
      descripcion: 'Nuestra sucursal principal, el corazón de nuestra pasión cafetera.',
      mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.6403362651515!2d-76.98468961977948!3d-12.049163566956623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c5d70786fb8d%3A0x792110870582d0af!2sAv.%20Nicol%C3%A1s%20Ayll%C3%B3n%203384%2C%20Ate%2015012!5e0!3m2!1ses-419!2spe!4v1632492913174!5m2!1ses-419!2spe'
    },
    {
      ciudad: 'Barrio Norte',
      direccion: 'Calle del Parque 45, Norte',
      descripcion: 'Un rincón acogedor para disfrutar de una tarde tranquila.',
      mapa: 'https://maps.google.com/maps?q=barrio+norte&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
  ];
}
