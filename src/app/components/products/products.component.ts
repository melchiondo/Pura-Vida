import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';
import { ProductModel } from '../../models/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {

  // products:Product[] = [];
  private products: ProductModel[] = [];

  constructor( private _productsService:ProductsService,
               private router:Router
  ) {
    window.scroll(0, 0);
    this._productsService.getProducts().subscribe( resp => {
      this.products = resp;
    });
  }

  ngOnInit() {
    // this.products = this._productsService.getProducts();
    // console.log(this.products);
  }

  verProducto (idx:number){
    this.router.navigate(['/productPage',idx]);
  }

}
