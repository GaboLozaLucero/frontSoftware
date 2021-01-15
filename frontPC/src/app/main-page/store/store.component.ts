import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product/product.service';
import { Product} from '../product/product';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductComponent } from '../product/product.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  products: Product[]=[];
  constructor(public productService: ProductService, private sanitizer: DomSanitizer, private router: Router ) { }

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts (){
    this.productService.getProducts().subscribe(products => this.products = products);
  }
  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  /*alert(product: Product) {
    this.productService.setLast(product);
    const dialogRef = this.router.navigateByUrl(/product/);
  }*/

}
