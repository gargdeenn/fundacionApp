import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl:string = environment.urlApiAuth;

  constructor(private http: HttpClient) {}

  create(event: any): Observable<any> {
    const formData = new FormData();
    formData.append('title', event.title);
    formData.append('description', event.description);
    formData.append('type_event_id', event.type_event_id);
    formData.append('image', event.image);
    console.log(event)
    return this.http.post<any>(`${this.apiUrl}/event`, formData).pipe(tap(
      (res) => {
        if (res) {
          console.log(res);
        }
      }
    ));
  }
}
