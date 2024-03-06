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
    id: '',
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

}
