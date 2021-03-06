import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import { RouterModule, Routes } from '@angular/router';
import { MDBBootstrapModule } from '../../../angular-bootstrap-md';
import { WavesModule } from 'angular-bootstrap-md';

const routes: Routes = [
  { path: '', component: NewsComponent}
];


@NgModule({
  imports: [
    WavesModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(routes),

  ],
  declarations: [
    NewsComponent
  ]
})
export class NewsModule { }
