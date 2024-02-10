import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticesRoutingModule } from './notices-routing.module';
import { NoticesComponent } from './notices/notices.component';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from 'src/app/services/event.service';


@NgModule({
  declarations: [
    NoticesComponent
  ],
  imports: [
    CommonModule,
    NoticesRoutingModule,
    HttpClientModule
  ],
  providers: [EventService]
})
export class NoticesModule { }
