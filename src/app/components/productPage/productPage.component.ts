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
    var cant = (<HTMLSelectElement>document.getElementById('buyPageCantidad')).value;
    var talle = (<HTMLSelectElement>document.getElementById('buyPageTalle')).value;
    var color = (<HTMLSelectElement>document.getElementById('buyPageColor')).value;
    var params = idx + "-" + cant + "-" + talle + "-" + color ;
    this.router.navigate(['/buyPage',params]);
  }

}
