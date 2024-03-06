import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlAuth = environment.urlApiAuth;

  constructor(private http: HttpClient) { }

  get(): Observable<User>{
    return this.http.get<User>(`${this.urlAuth}/user`).pipe(tap(
      (res: User) => {
        return res;
      }, error => {
        return error;
      }
    ))
  }

  delete(id: any): Observable<User>{
    return this.http.delete<User>(`${this.urlAuth}/user/${id}`).pipe(tap(
      (res: User) => {
        return res;
      }, error => {
        return error;
      }
    ))
  }

  put(user: User): Observable<User>{
    return this.http.put<User>(`${this.urlAuth}/userPut`, user).pipe(tap(
      (res: User) => {
        return res;
      }, error =>{
        return error;
      }
    ))
  }
}
