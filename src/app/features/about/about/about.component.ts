import { Component, OnInit, HostListener  } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  visibleImages = 3;
  type_event_id: string = "3";
  imageList: any;

  event: Event = {
    id: 0,
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
  @HostListener("window:scroll", [])
  onScroll(): void {
    // Verifica si el usuario ha llegado al final de la página
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      // Incrementa el número de imágenes visibles
      this.visibleImages += 3; // Puedes ajustar el número de imágenes que deseas mostrar
    }
  }
}
