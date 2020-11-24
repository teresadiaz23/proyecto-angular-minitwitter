import { Injectable } from '@angular/core';
import { LoginDto } from '../DTO/login.dto';
import { SignupDto } from '../DTO/signup.dto';
import { LoginResponse } from '../Interfaces/login-response.interface';
import { SignupResponse } from "../Interfaces/signup-response.interface";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TweetResponse } from '../Interfaces/tweet-response.interface';

const TWEET_URL = 'https://www.minitwitter.com:3001/apiv1/tweets/all';

const token = localStorage.getItem('token');

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + token
  })
};


@Injectable({
  providedIn: 'root'
})
export class TweetService {

  constructor(private http: HttpClient) { 
    
  }

  


  tweets(): Observable<TweetResponse[]>{
    return this.http.get<TweetResponse[]>(
      TWEET_URL,
      httpOptions
    )
  }

  // login(loginDto: LoginDto): Observable<LoginResponse> {
  //   return this.http.post<LoginResponse>(
  //     LOGIN_URL,
  //     loginDto,
  //     httpOptions
  //   );
    
  // }

  


}