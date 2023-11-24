import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from './Funcionario';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  apiUrl = 'http://localhost:5000/Funcionario';
  constructor(private http: HttpClient) { }
  listar(): Observable<Funcionario[]> {
    const url = `${this.apiUrl}/listar`;
    return this.http.get<Funcionario[]>(url);
  }
  buscar(funcionario: string): Observable<Funcionario> {
    const url = `${this.apiUrl}/buscar/${funcionario}`;
    return this.http.get<Funcionario>(url);
  }
  cadastrar(Funcionario: Funcionario): Observable<any> {
    const url = `${this.apiUrl}/cadastrar`;
    return this.http.post<Funcionario>(url, Funcionario, httpOptions);
  }
  atualizar(Funcionario: Funcionario): Observable<any> {
    const url = `${this.apiUrl}/atualizar`;
    return this.http.put<Funcionario>(url, Funcionario, httpOptions);
  }
  excluir(funcionario: string): Observable<any> {
    const url = `${this.apiUrl}/buscar/${funcionario}`;
    return this.http.delete<string>(url, httpOptions);
  }
}
