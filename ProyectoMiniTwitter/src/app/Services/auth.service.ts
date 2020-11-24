import { Injectable } from '@angular/core';
import { LoginDto } from '../DTO/login.dto';
import { LoginResponse } from '../Interfaces/login-response.interface';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const LOGIN_URL = 'https://www.minitwitter.com:3001/apiv1/auth/login';

//const token = localStorage.getItem('token');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    //'Authorization': 'Bearer ' + token
  })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(loginDto: LoginDto): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      LOGIN_URL,
      loginDto,
      httpOptions
    );
  }
}