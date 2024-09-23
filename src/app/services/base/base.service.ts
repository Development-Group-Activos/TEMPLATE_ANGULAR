import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
/*

/////////////////////////////////////////////////////////////////////////////////////////
servicio base para setear los headers que se pasan en cada request esto es solo para BMX
este servicio se va a extender a los demas sercivios
/////////////////////////////////////////////////////////////////////////////////////////
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  protected getAuthHeaders(): HttpHeaders {
    const ussIdSession = localStorage.getItem('usuariosesion');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': Bearer ${ussIdSession}
    });
    return headers;
  }
}
  */