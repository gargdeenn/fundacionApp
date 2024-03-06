import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  type_event_id: string = "1";
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
