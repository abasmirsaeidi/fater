import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  // cardcreated = false;
  // cards='';
  // data=this.'receivedNewsPageData';

  receivedPageData = {
    'baner': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',


    'other_program': [
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02c4c93a51d5000d9d9c29/5b03c282fda4ae000d6d20ac/img/desktop-rectangle-13-copy 6.png',
      },

      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02c4c93a51d5000d9d9c29/5b03c282fda4ae000d6d20ac/img/desktop-rectangle-13-copy 1.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
    ],
  };

  // public receivedNewsPageData = {
  //   'other_program': [
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02c4c93a51d5000d9d9c29/5b03c282fda4ae000d6d20ac/img/desktop-rectangle-13-copy 6.png',
  //     },
  //
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02c4c93a51d5000d9d9c29/5b03c282fda4ae000d6d20ac/img/desktop-rectangle-13-copy 1.png',
  //     },
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
  //     },
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
  //     },
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
  //     },
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
  //     },
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
  //     },
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
  //     },
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
  //     },
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
  //     },
  //     {
  //       'caption':
  //         'به متنی آزمایشی و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.',
  //       'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
  //     },
  //   ],
  // };



  constructor() { }


  // OnCreation_List_Cards(){
  //   this.cardcreated = true;
  //   this.cards = 'this.receivedNewsPageData';
  // }
  //


  ngOnInit() {
  }


}
