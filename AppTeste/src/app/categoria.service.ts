import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './Categoria';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  apiUrl = 'http://localhost:5000/Categoria';
  constructor(private http: HttpClient) { }
  listar(): Observable<Categoria[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Categoria[]>(url);
  }
  buscar(categoria: string): Observable<Categoria> {
    const url = `${this.apiUrl}/buscar/${categoria}`;
    return this.http.get<Categoria>(url);
  }
  cadastrar(Categoria: Categoria): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Categoria>(url, Categoria, httpOptions);
  }
  atualizar(Categoria: Categoria): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Categoria>(url, Categoria, httpOptions);
  }
  excluir(categoria: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${categoria}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
