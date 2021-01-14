import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import {ServiceService} from './serviceSignUp/service.service';
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public formGroup: any;
  titleAlert = 'This field is required';
  post: any = '';

  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }
  // tslint:disable-next-line:typedef
  createForm(){
    this.formGroup = this.formBuilder.group({
      cityId: [null, [Validators.required]],
      companyId: [null, [Validators.required]],
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(97)]],
      lastname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(97)]],
      phone: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      birthday: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: [null, [Validators.required, Validators.minLength(13), Validators.maxLength(60), Validators.email]],
      username: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(80)]]
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit(post: any){
    // tslint:disable-next-line:max-line-length
    this.serviceService.createUser({
      'cityId': post.cityId,
      'companyId': 2,
      'name': post.name,
      'lastname': post.lastname,
      'phone': post.phone,
      'birthday': post.birthday,
      'email': post.email,
      'username': post.username,
      'password': post.password}).subscribe(data => {alertify.success('User registered correctly');});
  }
}
