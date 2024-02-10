import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { JwtResponse } from '../models/jwt-response';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth_server:string = environment.urlApiAuth;
  private token!: any;

  constructor(private httpClient: HttpClient, private toast: ToastrService) { }

  register(user: User): Observable<User>{
    return this.httpClient.post<User>(`${this.auth_server}/user`, user)
    .pipe(tap(
      (res: User) => {
        if (res) {
          this.mostrarToastExito('Usuario creado con éxito!');
        }
      }, (error: any) => {
          this.mostrarToastError(error);
      }
    ));
  }

  login(user: User): Observable<JwtResponse>{
    return this.httpClient.post<JwtResponse>(`${this.auth_server}/login`, user)
    .pipe(tap(
      (res) => {
        if (res) {
          this.saveToken(res.access_token, res.expires_in, res.user);
          this.mostrarToastExito('Bienvenid@!');
        }
      },(error: any) => {
          this.mostrarToastError('Usuario o contraseña incorrecta!');
      }
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

  mostrarToastExito(mensaje: string) {
    this.toast.success(mensaje, '🥳');
  }

  mostrarToastError(mensaje: string) {
    this.toast.error(mensaje, '😓');
  }

}
