// auth.service.ts
import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface LoginResponse {
  token: string;
}

@Injectable({
  providedIn: 'any'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    @Inject('apiUrl') private apiUrl: string) 
    { }

  obterToken(credentials: any): Observable<LoginResponse> { 
    return this.http.post<LoginResponse>(this.apiUrl + '/Auth/login', credentials); 
  }
}