import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from './home.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';
import {PageService} from '../Services/Page.Service';

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
  providers:[
    PageService
  ]
})
export class HomeModule { }
