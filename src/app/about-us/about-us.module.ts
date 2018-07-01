import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';
import { InputsModule, WavesModule } from 'angular-bootstrap-md';



const routes: Routes = [
  { path: '', component: AboutUsComponent}
];

@NgModule({
  imports: [
    WavesModule,
    InputsModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(routes),
  ],
  declarations: [
    AboutUsComponent,
  ]
})
export class AboutUsModule { }
