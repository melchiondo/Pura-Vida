import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];

  constructor( private _productsService:ProductsService,
               private router:Router
  ) {
    window.scroll(0, 0);
  }

  ngOnInit() {
    this.products = this._productsService.getProducts();
    console.log(this.products);
  }

  verProducto (idx:number){
    this.router.navigate(['/productPage',idx]);
  }

}
