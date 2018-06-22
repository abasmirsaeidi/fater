import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssistComponent } from './assist.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';

const routes: Routes = [
  { path: '', component: AssistComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),

    RouterModule.forChild(routes)
  ],
  declarations: [
    AssistComponent,
  ]
})
export class AssistModule { }
