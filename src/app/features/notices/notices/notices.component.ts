import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  selectedFile!: File;
  file!: File;

  constructor(){
  }
  ngOnInit(): void {

  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  submit(): void{
  }

  download(): void {
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
    // Agrega más noticias según sea necesario
  ];

}
