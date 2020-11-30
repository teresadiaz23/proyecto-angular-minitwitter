import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateDto } from '../DTO/create.dto';
import { CreateResponse } from '../Interfaces/create-response.interface';

const CREATE_URL = 'https://www.minitwitter.com:3001/apiv1/tweets/create';

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
export class CreateService {

  constructor(private http: HttpClient) { }


  create(createDto: CreateDto): Observable<CreateResponse>{
    return this.http.post<CreateResponse>(
      CREATE_URL,
      createDto,
      httpOptions
    )

  }
}