import { Injectable } from '@angular/core';
import { Venta } from '../app/models/venta.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private apiUrl = 'https://aapiss.netlify.app/ventas';

  constructor(private http: HttpClient) { }

  postVentas(ventas: Venta[]): Observable<Venta[]> {
    return this.http.post<Venta[]>(this.apiUrl, ventas);  // Se agrega el cuerpo de la solicitud
  }
}

