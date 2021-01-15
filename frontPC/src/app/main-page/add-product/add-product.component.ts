import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Observable } from "rxjs";
import { MatDialog } from '@angular/material/dialog';
import { ServiceService} from "../product/ServiceProduct/service.service";
import * as alertify from 'alertifyjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  titleAlert: string = "This field is required";
  post: any;
  formGroup = this.formBuilder.group({
    cityId: ['', [Validators.required]],
    brandId: ['', [Validators.required]],
    productTypeId: ['', [Validators.required]],
    companyId: ['', [Validators.required]],
    productName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(97)]],
    model: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(97)]],
    productDescription: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(1500)]],
    stock: ['', [Validators.required]],
    weight: ['', [Validators.required]],
    image: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(1500)]],
    pricePerUnit: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(80)]]
  });

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog, public serviceService: ServiceService, private router: Router) {}

  ngOnInit() {  }

  onSubmit(post: any) {
    this.serviceService.createProduct({
        "productName": post.productName ,
        "model": post.model,
        "productDescription": post.productDescription,
        "stock": post.stock,
        "weight": post.weight,
        "pricePerUnit": post.pricePerUnit,
        "currency": 1,
        "img": post.image,
        "companyId": post.companyId,
        "productTypeId": post.productTypeId,
        "cityId": post.cityId ,
        "brandId": post.brandId})
    .subscribe(data => { alertify.success('Product registered correctly'); this.formGroup.reset(); }, (error) => { alertify.error('Invalid field(s), check the information'); });
  }
}
