import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'any'
})


export class CalculadoraService {
  // private apiUrl = 'https://localhost:44324/api'; 

  constructor(private http: HttpClient, @Inject('apiUrl') private apiUrl: string) { }
 

calcular(valor1: number, valor2: number, operacao: number): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });
    
    const url = `${this.apiUrl}/Calculate?value1=${encodeURIComponent(valor1)}&value2=${encodeURIComponent(valor2)}&operation=${encodeURIComponent(operacao)}`; 
    return this.http.get<any>(url, { headers: headers }); 
  }
}

