import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { MessageService } from 'src/app/services/message.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  isLoadingContact: boolean = false;

  message: Contact = {
    name:'',
    lastname:'',
    email:'',
    cellphone:'',
    message:''
  }
  constructor(private messageService: MessageService, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  submitMessage(): void {
    this.isLoadingContact = true;
    this.messageService.create(this.message).subscribe( response => {
      this.isLoadingContact = false;
      this.viewportScroller.scrollToPosition([0, 0]);
    },
    error => {
      this.isLoadingContact = false;
      this.viewportScroller.scrollToPosition([0, 0]);
    })
  }

}
