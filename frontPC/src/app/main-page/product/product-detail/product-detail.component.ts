import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any[] = [];
  productId: any[] = [];
  cartTotal: any[] = [];
  cart: any[] = [];

  errorMessage: any;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) {
/*
    this.activatedRoute.params.subscribe(params => {
      this.productId = [parseInt(params['productId'])]
      console.log(params['productId']);
      console.log(this.productId)
    });

    this.http.get('http://localhost:8080/v1/product/' + this.productId)
    .subscribe((data: any) => {
      this.product = data;
      console.log(this.product[0]);
    });*/
  }
  ngOnInit(): void { }
}
