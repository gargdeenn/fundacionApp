import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Contact } from '../models/contact';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private url:string = environment.urlApi;
  constructor(private http: HttpClient, private toast: ToastrService) { }

  create(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(`${this.url}/contact`, contact).pipe(tap(
      (res: Contact) => {
        if (res) {
          this.mostrarToastExito('¡Mensaje enviado con éxito!. Pronto nos pondremos en contacto contigo.');
        }
      },
      (error) => {
        this.mostrarToastError('Ocurrió un problema y este mensaje no se ha podido enviar');
      }
    ));
  }

  mostrarToastExito(mensaje: string) {
    this.toast.success(mensaje, '🥳');
  }

  mostrarToastError(mensaje: string) {
    this.toast.error(mensaje, '😓');
  }

}
