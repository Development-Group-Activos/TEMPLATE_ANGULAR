import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:7001/api/rest/consecutivo';  // Cambia a la URL de tu backend

  constructor(private http: HttpClient) { }

  // Métodos para obtener la informacion del del backend
  /*ejemplo
  getUser(): Observable<User> {
    return this.http.get<User>(${this.apiUrl}/user);
  }
    */
}