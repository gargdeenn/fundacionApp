import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { MessageService } from 'src/app/services/message.service';

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
  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  submitMessage(): void {
    this.isLoadingContact = true;
    this.messageService.create(this.message).subscribe( response => {
      this.isLoadingContact = false;
    },
    error => {
      this.isLoadingContact = false;
    })
  }

}
