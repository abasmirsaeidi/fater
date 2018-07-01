import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  public map: any = { lat: 51.678418, lng: 7.809007 };
  filterForm: any;


  constructor() {}

  ngOnInit() {
  }

}
