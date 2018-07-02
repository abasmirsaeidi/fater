import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';

const routes: Routes = [
  { path: '', component: InformationComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(routes)
  ],
  declarations: [InformationComponent]
})
export class InformationModule { }
