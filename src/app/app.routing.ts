import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule} from '@angular/common';

const routes: Routes = [
  { path: 'home',       loadChildren: './home/home.module#HomeModule' },
  { path: 'abilities',  loadChildren: './abilities/abilities.module#AbilitiesModule' },
  { path: 'news',  loadChildren: './news/news.module#NewsModule' },
  { path: 'information',  loadChildren: './information/information.module#InformationModule' },
  { path: 'about-us',   loadChildren: './about-us/about-us.module#AboutUsModule' },
  { path: 'assist',     loadChildren: './assist/assist.module#AssistModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
  { path: 'collections', loadChildren: './collections/collections.module#CollectionsModule' },
  { path:   '**',       redirectTo: 'home' , pathMatch: 'full'},

];


@NgModule({

  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],

})

export class AppRoutingModule { }
