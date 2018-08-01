///<reference path="../../../node_modules/@angular/forms/src/model.d.ts"/>
// /<reference path="../../../node_modules/@angular/forms/src/model.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent implements OnInit {
  public map: any = {lat: 51.678418, lng: 7.809007};
  filterForm: any;
// ********
  signupForm: FormGroup

  ngOnInit() {
    this.signupForm = new FormGroup({
      username: new FormControl(null),
      email: new FormControl(null),
      content: new FormControl(null)

    })
  }
    onSubmit(){
      console.log(this.signupForm)
    }

}
