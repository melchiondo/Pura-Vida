import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-productPageSearch',
  templateUrl: './productPageSearch.component.html'
})
export class ProductPageSearchComponent {

  private product:any = {};

  constructor( private activatedRoute:ActivatedRoute,
               private _productsService:ProductsService
  ) {
    this.activatedRoute.params.subscribe( params=> {
      this.product = this._productsService.getProductSearched(params['nombre']);
      console.log(this.product);
    })
  }

}
