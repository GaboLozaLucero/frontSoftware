import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  post: any = '';
  formGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(80)]]
  });
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }
  onSubmit(post: any){ console.log('SIGNING IN'); }

}
