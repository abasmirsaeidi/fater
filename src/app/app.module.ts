import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import {AppRoutingModule} from './app.routing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent} from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {AgmCoreModule} from '@agm/core';
import {FooterModule} from './footer/footer.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpService} from './Services/httpServices.service';
// import { NewsComponent } from './news/news.component';
// import { InformationComponent } from './information/information.component';


@NgModule({


  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ],

  imports: [
    HttpClientModule,
    FooterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'your key here'
    })
  ],
  providers: [HttpService ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]

})

export class AppModule { }
