import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbilitiesComponent} from './abilities.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';


const routes: Routes = [
  { path: '', component: AbilitiesComponent}
];
@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),

    RouterModule.forChild(routes)
  ],
  declarations: [
    AbilitiesComponent,
  ]
})
export class AbilitiesModule { }
