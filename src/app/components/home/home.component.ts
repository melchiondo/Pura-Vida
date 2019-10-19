import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  product:any = {};

  constructor(private _productsService:ProductsService) {
    // this.product = this._productsService.getProduct(0);
  }


}
