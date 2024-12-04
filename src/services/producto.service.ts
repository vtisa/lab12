import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../app/models/producto.model';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private apiUrl = 'https://aapiss.netlify.app/productos'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }
}
