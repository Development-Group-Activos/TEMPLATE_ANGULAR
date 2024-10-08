import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';  

import { environment } from '../../environments/environment.development';  
11111
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = environment.baseUrl;  

  constructor(private http: HttpClient) { }

  getUser(): Observable<User> {
    return this.http.get<User>(${this.baseUrl}/user); // Sin pasar opciones
  }

}