import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeMoreComponent } from './see-more/see-more.component';

const routes: Routes = [
  {
    path: '',
    component: SeeMoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeeMoreRoutingModule { }
