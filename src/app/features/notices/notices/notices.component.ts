import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-notices',
  templateUrl: './notices.component.html',
  styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {
  type_event_id: string = "2";
  imageList: any;

  event: Event = {
    title:'',
    description:'',
    image: '',
    type_event_id:''
  };

  constructor(private eventService: EventService){
  }

  ngOnInit(): void {
    this.eventService.getImg(this.type_event_id).subscribe( data => {
      this.imageList = data;
      console.log(data);
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
