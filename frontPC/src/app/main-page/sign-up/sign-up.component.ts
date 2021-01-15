import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, NgForm} from '@angular/forms';
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

  private validEmail = /\S+@\S+\.\S+/;
  post: any = '';
  error: any;
  formGroup = this.formBuilder.group({
    cityId: ['', [Validators.required]],
    companyId: ['', [Validators.required]],
    name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(97)]],
    lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(97)]],
    phone: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
    birthday: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    email: ['', [Validators.required, Validators.minLength(13), Validators.maxLength(60), Validators.pattern(this.validEmail)]],
    username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(30)]],
    password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(80)]]
  });

  constructor(private formBuilder: FormBuilder, private serviceService: ServiceService, private router: Router) { }

  ngOnInit(): void {  }
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
      'password': post.password}).subscribe(data => { alertify.success('User registered correctly'); this.formGroup.reset(); }, (error) => { alertify.error(error.message); } );
  }
  get f() { return this.formGroup.controls; }
  getErrorMessage(field: string): string {
    let message;
    if (this.formGroup.get(field).errors.requiered) {
      message = 'This field is requiered';
    } else if (this.formGroup.get(field).hasError('pattern')) {
      message = 'Not valid email';
    } else if (this.formGroup.get(field).hasError('minLength')) {
      const minLength = this.formGroup.get(field).errors?.minLength.requiredLength;
      message = `This field must be longer than ${minLength} characters`;
    }
    return message;
  }
  isValidField(field: string): boolean {
    return (
      (this.formGroup.get(field).touched || this.formGroup.get(field).dirty) && !this.formGroup.get(field).valid
    );
  }
}
