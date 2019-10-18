import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productPage',
  templateUrl: './productPage.component.html'
})
export class ProductPageComponent {

  product:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _productsService:ProductsService,
               private router:Router,
  ) {
      this.activatedRoute.params.subscribe( params=> {
      this.product = this._productsService.getProduct(params['id']);
      console.log(this.product);
    })
  }

  comprarProducto (idx:number){
    this.router.navigate(['/buyPage',idx]);
  }

}
