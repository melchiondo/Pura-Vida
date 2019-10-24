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
  private keyProd:string;
  private cantidad:string;
  private talle:string;
  private color:string;

  constructor( private activatedRoute:ActivatedRoute,
               private _productsService:ProductsService,
               private router:Router,
  ) {
      this.activatedRoute.params.subscribe( params=> {
      var str = params['id']; //asigna parametros
      var splitted = str.split("-", 4); //separa parametros por guiones
      this.keyProd = splitted[0];
      this.cantidad = splitted[1];
      this.talle = splitted[2];
      this.color = splitted[3];
      this.product = this._productsService.getProduct(this.keyProd);
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
