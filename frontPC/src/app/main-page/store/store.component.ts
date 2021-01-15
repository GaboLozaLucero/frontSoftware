import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product} from '../product/product';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductComponent } from '../product/product.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: Product[]=[];
  constructor(public productService: ProductService, private sanitizer: DomSanitizer, public dialog: MatDialog, private router: Router ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts (){
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  public getSantizeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  alert(product: Product) {
    this.productService.setLast(product);
    const dialogRef = this.dialog.open(ProductComponent, {
      width: '1000px', disableClose: true
    });
  }

}
