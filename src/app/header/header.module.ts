import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';
import { WavesModule } from 'angular-bootstrap-md';
@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    WavesModule
  ],
  declarations: []
})
export class HeaderModule { }
