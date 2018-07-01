import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import {RouterModule, Routes} from '@angular/router';
import {MDBBootstrapModule} from '../../../angular-bootstrap-md';
import {AgmCoreModule} from '@agm/core';
import {FooterModule} from '../footer/footer.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  { path: '', component: ContactUsComponent}
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    FooterModule,
    CommonModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      apiKey: 'your key here'
    })
  ],
  declarations: [
    ContactUsComponent,
  ]
})
export class ContactUsModule { }
