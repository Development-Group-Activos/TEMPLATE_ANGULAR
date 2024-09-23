import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';  // Verifica que el modelo esté definido

import { environment } from '../../environments/environment.development';  // Importa el entorno
11111
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;  // Cambia 'apiUrl' a 'baseURL'

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(${this.baseUrl}/user); // Sin pasar opciones
  }

}