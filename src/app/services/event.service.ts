import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl:string = environment.urlApiAuth;
  private apiUrlNoAuth = environment.urlApi;

  constructor(private http: HttpClient, private toast: ToastrService) {}

  create(event: any): Observable<any> {
    const formData = new FormData();
    formData.append('title', event.title);
    formData.append('description', event.description);
    formData.append('type_event_id', event.type_event_id);
    formData.append('image', event.image, event.title.substring(0, 10).trim());
    console.log(event)
    return this.http.post<any>(`${this.apiUrl}/event`, formData).pipe(tap(
      (res) => {
        if (res) {
          this.toast.success('¡Evento creado con éxito!');
        }
      }, error => {
        this.toast.error('Oh oh! ¡Ha ocurrido un problema!');
      }
    ));
  }

  getImg(type_event_id: string): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrlNoAuth}/event/${type_event_id}`);
  }

  getEventId(id: string): Observable<Event>{
    return this.http.get<Event>(`${this.apiUrlNoAuth}/event_id/${id}`);
  }

  getEvents(): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/event`);
  }

  delete(id: any): Observable<Event> {
    return this.http.delete<Event>(`${this.apiUrl}/event/${id}`)
  }

  put(event: Event): Observable<Event>{
    return this.http.put<Event>(`${this.apiUrl}/eventPut`, event).pipe(tap(
      (res: Event) => {
        return res;
      }, error => {
        return error;
      }
    ))
  }

}
