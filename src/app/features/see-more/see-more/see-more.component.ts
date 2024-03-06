import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-see-more',
  templateUrl: './see-more.component.html',
  styleUrls: ['./see-more.component.css']
})
export class SeeMoreComponent implements OnInit {
  id: any;
  event: Event = {
    id: '',
    title:'',
    description:'',
    image: '',
    type_event_id:''
  };

  constructor(private route: ActivatedRoute, private eventService: EventService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.eventService.getEventId(this.id).subscribe(response => {
      this.event = response;
      console.log(response);
    })
  }

}
