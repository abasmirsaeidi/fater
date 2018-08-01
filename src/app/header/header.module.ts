import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';
import { WavesModule } from 'angular-bootstrap-md';
import {InputsModule} from 'angular-bootstrap-md';
import {ModalModule} from 'angular-bootstrap-md';
@NgModule({
  imports: [
    CommonModule,
    InputsModule,
    MDBBootstrapModule.forRoot(),
    WavesModule,
    ModalModule,
  ],
  declarations: []
})
export class HeaderModule { }
