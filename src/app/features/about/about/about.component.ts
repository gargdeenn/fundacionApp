import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  newsItems = [
    {
      title: 'Título de la noticia 1',
      description: 'Descripción de la noticia 1.',
      imageUrl: 'https://placekitten.com/300/200' // Imagen de prueba
    },
    {
      title: 'Título de la noticia 2',
      description: 'Descripción de la noticia 2.',
      imageUrl: 'https://placekitten.com/300/200' // Imagen de prueba
    },
    {
      title: 'Título de la noticia 2',
      description: 'Descripción de la noticia 2.',
      imageUrl: 'https://placekitten.com/300/200' // Imagen de prueba
    }
    // Agrega más noticias según sea necesario
  ];
}
