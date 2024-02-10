import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticesRoutingModule } from './notices-routing.module';
import { NoticesComponent } from './notices/notices.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    NoticesComponent
  ],
  imports: [
    CommonModule,
    NoticesRoutingModule,
    HttpClientModule
  ],
  providers: []
})
export class NoticesModule { }
