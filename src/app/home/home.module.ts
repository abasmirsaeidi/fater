import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';

const routes: Routes = [
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),

    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
  ],
})
export class HomeModule { }
