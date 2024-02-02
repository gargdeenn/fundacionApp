import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth_server:string = 'http://localhost:8000/api/auth';
  authSubject = new BehaviorSubject(false);
  private token!: any;
  
  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(`${this.auth_server}/register`, user)
    .pipe(tap(
      (res: JwtResponse) => {
        if (res) {
          
        }
      }
    ));
  }
  
  login(user: User): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(`${this.auth_server}/login`, user)
    .pipe(tap(
      (res) => {
        if (res) {
          this.saveToken(res.access_token, res.expires_in, res.user);
        }
      },
    ));
  }

  logout(): void{
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  saveToken(token: string, expiresIn: string, user: User): void{
    const userJSON = JSON.stringify(user);
    localStorage.setItem('USER', userJSON);
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  getToken(): string{
    if (!this.token) {
      this.token = localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  getUser(): any{
    return JSON.parse(localStorage.getItem("USER") || '{}');
  }

}
