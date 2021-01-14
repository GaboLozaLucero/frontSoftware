import { Component, OnInit } from '@angular/core';

import * as alertify from 'alertifyjs';
import {FormBuilder} from "@angular/forms";
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    alertify.success('Message sent');
  }

}
