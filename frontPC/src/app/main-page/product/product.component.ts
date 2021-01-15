import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any;
  description: string;
  constructor(private productService: ProductService, private dialog: MatDialog, private snackBar: MatSnackBar, private router: Router ) { }
  ngOnInit(): void {
    this.product = this.productService.getLast();
    this.description = this.product.productDescription.split('~');
  }
  getImg(){
    return this.product.img;
  }
  close(){
    this.dialog.closeAll();
  }

}
