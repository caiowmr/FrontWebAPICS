import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carrinho } from './Carrinho';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhosService {
  apiUrl = 'http://localhost:5000/Carrinho';
  constructor(private http: HttpClient) { }
  listar(): Observable<Carrinho[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Carrinho[]>(url);
  }
  buscar(carrinho: string): Observable<Carrinho> {
    const url = `${this.apiUrl}/buscar/${carrinho}`;
    return this.http.get<Carrinho>(url);
  }
  cadastrar(Carrinho: Carrinho): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Carrinho>(url, Carrinho, httpOptions);
  }
  atualizar(Carrinho: Carrinho): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Carrinho>(url, Carrinho, httpOptions);
  }
  excluir(carrinho: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${carrinho}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
