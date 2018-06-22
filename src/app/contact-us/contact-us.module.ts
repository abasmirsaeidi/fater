import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';

const routes: Routes = [
  { path: '', component: ContactUsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),

    RouterModule.forChild(routes)
  ],
  declarations: [
    ContactUsComponent,
  ]
})
export class ContactUsModule { }
