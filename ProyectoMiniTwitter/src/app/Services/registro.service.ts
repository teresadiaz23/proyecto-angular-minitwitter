import { Injectable } from '@angular/core';
import { LoginDto } from '../DTO/login.dto';
import { SignupDto } from '../DTO/signup.dto';
import { LoginResponse } from '../Interfaces/login-response.interface';
import { SignupResponse } from "../Interfaces/signup-response.interface";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const SINGUP_URL = 'https://www.minitwitter.com:3001/apiv1/auth/signup';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};


@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: HttpClient) { }


  signup(singupDto: SignupDto): Observable<SignupResponse>{
    return this.http.post<SignupResponse>(
      SINGUP_URL,
      singupDto,
      httpOptions
    )

  }
}