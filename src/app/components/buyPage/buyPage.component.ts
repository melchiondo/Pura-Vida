import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-buyPage',
  templateUrl: './buyPage.component.html'
})
export class BuyPageComponent implements OnInit {

  product:any = {};
  private keyProd:string;
  private cantidad:string;
  private talle:string;
  private color:string;
  private par:string;
  private total:number;

  constructor(private activatedRoute:ActivatedRoute,
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
      this.total = Number(this.cantidad) * this.product.precio;
    })
  }

  ngOnInit() {
  }

  volverProducto (idx:number){
    var params = idx + "-" + this.cantidad + "-" + this.talle + "-" + this.color ;
    this.router.navigate(['/productPage',params]);
  }

}
