import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeeMoreRoutingModule } from './see-more-routing.module';
import { SeeMoreComponent } from './see-more/see-more.component';
import { EventService } from 'src/app/services/event.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SeeMoreComponent
  ],
  imports: [
    CommonModule,
    SeeMoreRoutingModule,
    HttpClientModule
  ],
  providers: [EventService]
})
export class SeeMoreModule { }
