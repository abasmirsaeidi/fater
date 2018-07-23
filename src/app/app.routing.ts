import { NgModule
  // ,Injectable
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  // CanActivate,
  RouterModule, Routes
  // Router
} from '@angular/router';
import { CommonModule} from '@angular/common';
// import { UserService} from './Services/User.Service';
// import { Observable} from 'rxjs';
// import {any} from 'codelyzer/util/function';

// @Injectable()
// export class LoginUerGuard implements CanActivate {
// //
//   constructor(private auth: UserService, private router: Router) {
//   }
//   //
//   // canActivate() {
//   //   const observable = new Observable<boolean>((observer) => {
//   //     const data = {};
//   //     this.auth.authUser(data).subscribe(response => {
//   //       if (response=any () ['ok']) {
//   //         if (response=any () ['result']) {
//   //           observer.next(true);
//   //         }
//   //         else {
//   //           observer.next(false);
//   //           this.router.navigate(['/']);
//   //         }
//   //       } else {
//   //
//   //       }
//   //
//   //     });
//   //   });
//   //   return observable;
//   // }
//
// }

const routes: Routes = [
  { path: 'home',       loadChildren: './home/home.module#HomeModule' },
  { path: 'abilities',  loadChildren: './abilities/abilities.module#AbilitiesModule' },
  { path: 'news',  loadChildren: './news/news.module#NewsModule',
    // canActivate:[LoginUerGuard]
  },
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
