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
  public keyProd:string;
  public cantidad:string;
  public talle:string;
  public color:string;
  public par:string;
  public total:number;
  public buyWhatsappURL:string = "https://api.whatsapp.com/send?phone=5491167418722&text=Hola!%20Me%20interesa%20";

  constructor(private activatedRoute:ActivatedRoute,
              private _productsService:ProductsService,
              private router:Router,
  ) {
      window.scroll(0, 0);
      this.activatedRoute.params.subscribe( params=> {
      var str = params['id']; //asigna parametros
      var splitted = str.split("-", 4); //separa parametros por guiones
      this.keyProd = splitted[0];
      this.cantidad = splitted[1];
      this.talle = splitted[2];
      this.color = splitted[3];
      this.product = this._productsService.getProduct(this.keyProd);
      this.total = Number(this.cantidad) * this.product.precio;
      var s:string = "%20";
      this.buyWhatsappURL += this.product.nombre + "," + s + "cantidad:" + s + this.cantidad + "," + s + "talle:" + s + this.talle + "," + s + "color:" + s + this.color;
    })
  }

  ngOnInit() {
  }

  volverProducto (idx:number){
    var params = idx + "-" + this.cantidad + "-" + this.talle + "-" + this.color ;
    this.router.navigate(['/productPage',params]);
  }

}
