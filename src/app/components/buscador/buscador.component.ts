import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService, Product } from '../../services/products.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  productosEncontrados:Product[] = [];
  termino:string;
  @Input() prodTarjeta:Product;
  @Input() index:number;

  constructor( private activatedRoute:ActivatedRoute,
               private _productsService:ProductsService,
               private router:Router
             ) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      console.log(this.termino);
      this.productosEncontrados = this._productsService.buscarProductos(params['termino'])
      console.log(this.productosEncontrados);
    })
  }

  verProducto (nom:string){
    this.router.navigate(['/productPageSearch',nom]);
  }

}
