import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticesRoutingModule } from './notices-routing.module';
import { NoticesComponent } from './notices/notices.component';
import { ImageService } from './service/image.service';
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
  providers: [ImageService]
})
export class NoticesModule { }
