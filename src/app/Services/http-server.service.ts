import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServerService {
  private REST_API_SERVICE = "http://localhost:3000";
  private REST_API_RANDOM_USER = "https://randomuser.me/api/?results=";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'mode': 'no-cors',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,OPTIONS',
      'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Content-Type, Accept, Accept-Language, Origin, User-Agent'
    })
  };
  constructor(private httpClient: HttpClient) {

  }

  public getComments(): Observable<any> {
    const url = this.REST_API_SERVICE + '/comments';
    return this.httpClient.get<any>(url, this.httpOptions);
  }

  public postComments(payload: any): Observable<any> {
    const url = this.REST_API_SERVICE + '/comments';
    console.log('postComment: url', url);
    console.log('postComment: payload', payload);
    return this.httpClient.post<any>(url, payload, this.httpOptions);
  }

  public getUsers(users: number = 1): Observable<any> {
    const url = this.REST_API_RANDOM_USER + users;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
}
