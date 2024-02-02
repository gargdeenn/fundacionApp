import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
   userData: any = {
    name: '',
    password: '',
    cellphone: '',
    email: '',
    rol_id: 1 // Por defecto, ADMINISTRADOR
  };

  newsData: any = {
    title: '',
    description: '',
    image_url: '',
    type_event_id: 1 // Por defecto, ACTIVIDAD
  };

  submitUserForm() {
    // Lógica para enviar datos del usuario al backend
    console.log('Usuario enviado:', this.userData);
  }

  submitNewsForm() {
    // Lógica para enviar datos de la noticia al backend
    console.log('Noticia enviada:', this.newsData);
  }

  handleImageUpload(event: any):void {

  }

}
