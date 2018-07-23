import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router){}

  ngOnInit() {
    this.router.events.subscribe((event) => {
        if ( !(event instanceof NavigationEnd) ) {
          return;
        }
        window.scroll(0, 0);
      }
    )
  };

}












  // Posts: Post[];
  // article = {
  //   id: 'لاااااااااام' ,
  //   userId: 10,
  //   title: 'مطلب جدید',
  //   body: 'توضیحات این مطلب را دراین قسمت وارد میکنم',
  // };
  // h = "";
  // servercreationtext = 'سروری ایجادنشده است.';
  // allowbutton = false;
  // servername = '';
  // constructor(private  httpService: HttpService) {
  //   setTimeout(() => {
  //     this.allowbutton = true
  //   }, 2000)
  //
  // }

  // onupdateservername(event: any) {
  //   console.log(event.target.value);
  //   this.servername = event;
  //
  // }

  // onCreationServer() {
  //   this.servercreationtext = "سرور ایجاد شد."
  // }

  // onFetchPost() {
  //   this.httpService.fetchPosts().subscribe(
  //     (response: Post[]) => {
  //       // this.Posts = response;
  //       this.h = response[" id "];
  //       console.log(response);
  //     }
  //   )
  // }

//   onAddPosts() {
//     this.httpService.createPost(this.article).subscribe(
//       (response: Post[]) => {
//         this.Posts = response
//         console.log(this.Posts);
//       }
//     )
//   }
// }
