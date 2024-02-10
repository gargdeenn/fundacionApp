import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private apiUrl:string = environment.urlApiAuth;

  constructor(private http: HttpClient, private toast: ToastrService) {}

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
          this.toast.success('¡Evento creado con éxito!');
        }
      }, error => {
        this.toast.error('Oh oh! ¡Ha ocurrido un problema!');
      }
    ));
  }

  getImg(type_event_id: string): Observable<Event[]> {
    return this.http.get<Event[]>(`http://127.0.0.1:8000/api/event/${type_event_id}`);
  }

}
