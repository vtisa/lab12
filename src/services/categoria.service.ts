import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Categoria } from '../app/models/categoria.model';


@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  private apiUrl = 'https://aapiss.netlify.app/categorias'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.apiUrl);
  }
}
