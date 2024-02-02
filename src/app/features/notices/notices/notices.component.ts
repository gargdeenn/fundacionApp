import { Component, OnInit } from '@angular/core';
import { ImageService } from '../service/image.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

  selectedFile!: File;
  file!: File;
  constructor(private imageService: ImageService){
    console.log(this.imageService)
  }
  ngOnInit(): void {
    
  }
  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  submit(): void{
    this.imageService.uploadImage(this.selectedFile).subscribe(response => {
      alert(response);
    })
  }

  download(): void {
    this.imageService.downloadImage('image').subscribe(response => {
      this.file = response;
      console.log(this.file);
    })
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
