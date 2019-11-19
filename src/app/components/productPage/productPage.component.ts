import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { VisitaProductModel } from '../../models/visitaProduct.model';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-productPage',
  templateUrl: './productPage.component.html'
})
export class ProductPageComponent {

  product:any = {};
  public keyProd:string;
  public cantidad:string;
  public talle:string;
  public color:string;
  visitaProduct: VisitaProductModel = new VisitaProductModel();

  // public whatsappShare:string = "whatsapp://send?text=Hola!%20Mirá%20que%20bueno%20:%20http://www.puravida-web.com/#/productPage/"

  constructor( private activatedRoute:ActivatedRoute,
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
      // this.whatsappShare += this.keyProd;

      if(!isDevMode()){
        this.generarVisitaProduct();
      }

    })
  }

  generarVisitaProduct(){
    let d:Date = new Date;
    d.setHours(d.getHours()-3); // resto 3 horas porque el servidor de FIREBASE está en EEUU
    this.visitaProduct.timestamp = d;
    this.visitaProduct.product = this.keyProd;

    this._productsService.crearVisitaProduct( this.visitaProduct)
    .subscribe( resp=> {
      console.log(resp);
    });
  }

  comprarProducto (idx:number){
    var cant = (<HTMLSelectElement>document.getElementById('buyPageCantidad')).value;
    var talle = (<HTMLSelectElement>document.getElementById('buyPageTalle')).value;
    var color = (<HTMLSelectElement>document.getElementById('buyPageColor')).value;
    var params = idx + "-" + cant + "-" + talle + "-" + color ;
    this.router.navigate(['/buyPage',params]);
  }

}
