import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../../services/products.service';

@Component({
  selector: 'app-filterNav',
  templateUrl: './filterNav.component.html',
  styleUrls: ['./filterNav.component.css']
})
export class FilterNavComponent implements OnInit {

  products:Product[] = [];
  tipoProds:String[] = [];
  filterTipoProd:String;

  constructor(private _productsService:ProductsService,
  ) { }

  ngOnInit() {
    // this.products = this._productsService.getProducts();
    this.tipoProds = this._productsService.getCategorias();
  }

}
