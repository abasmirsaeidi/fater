import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  receivedPageData = {
    'baner': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',


    'assist_company': [

      {
        'logo': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-googledrivelogo.png',
        'link': 'http://176.223.139.31/home'
      },
      {
        'logo': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-googledrivelogo.png',
        'link': 'http://176.223.139.31/home'
      },
      {
        'logo': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-googledrivelogo.png',
        'link': 'http://176.223.139.31/home'
      },
      {
        'logo': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-googledrivelogo.png',
        'link': 'http://176.223.139.31/home'
      },
      {
        'logo': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-googledrivelogo.png',
        'link': 'http://176.223.139.31/home'
      },
      {
        'logo': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-googledrivelogo.png',
        'link': 'http://176.223.139.31/home'
      },

    ],

    'value_proposition': [
      {

        'title': 'اهداف ما',
        'caption': 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیش تری را برای طراحان رایارو در زبان فارکامورد استفاده قرار گیرد.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-photo-1514043454212-14c181f46583.png'
      },
      {

        'title': 'اهداف ما',
        'caption': 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیش تری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبااشت که تمام و دشواریسا مورد استفاده قرار گیرد.',
        'img': 'http://img.worldbook.ir//2017/08/Drone-660x330.jpg'
      },
      {

        'title': 'اهداف ما',
        'caption': 'کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیش تری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبااد امید داشت که تمام و دشواری موجود در ارائه راهکارها  مورد استفاده قرار گیرد.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png'
      },
    ],


    'other_program': [
      {
        'caption':
          'به متنی آزمایشی و بی‌ماحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02c4c93a51d5000d9d9c29/5b03c282fda4ae000d6d20ac/img/desktop-rectangle-13-copy 6.png',
      },

      {
        'caption':
          'به متنی آزمایشی و بی‌معنی در افیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02c4c93a51d5000d9d9c29/5b03c282fda4ae000d6d20ac/img/desktop-rectangle-13-copy 1.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معنایی و طراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معطراحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
      {
        'caption':
          'به متنی آزمایشی و بی‌معحی گرافیک گفته می‌شود.',
        'img': 'https://anima-uploads.s3.amazonaws.com/5a47554c8aafab000d8aa728/5b02b7c13a51d5000bd474f7/5b02b7c3c1baec000b6a06b0/img/desktop-rectangle-6%203.png',
      },
    ],
  };
  constructor() { }

  ngOnInit() {
  }

}
