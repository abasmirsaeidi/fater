import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';
import { WavesModule } from 'angular-bootstrap-md';

@NgModule({
  imports: [    MDBBootstrapModule.forRoot(),
    WavesModule,
    CommonModule
  ],
  declarations: []
})
export class FooterModule { }
