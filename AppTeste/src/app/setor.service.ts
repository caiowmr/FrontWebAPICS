import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from './Setor';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SetorService {
  apiUrl = 'http://localhost:5000/Setor';
  constructor(private http: HttpClient) { }
  listar(): Observable<Setor[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Setor[]>(url);
  }
  buscar(setor: string): Observable<Setor> {
    const url = `${this.apiUrl}/buscar/${setor}`;
    return this.http.get<Setor>(url);
  }
  cadastrar(Setor: Setor): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Setor>(url, Setor, httpOptions);
  }
  atualizar(Setor: Setor): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Setor>(url, Setor, httpOptions);
  }
  excluir(setor: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${setor}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
