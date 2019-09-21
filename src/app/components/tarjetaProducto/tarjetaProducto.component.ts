import { Component, OnInit, Input } from '@angular/core';
import { ProductsService, Product } from '../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetaProducto',
  templateUrl: './tarjetaProducto.component.html',
  styles: []
})
export class TarjetaProductoComponent implements OnInit {

  @Input() prodTarjeta:Product;
  @Input() index:number;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  verProducto (idx:number){
    this.router.navigate(['/productPage',this.index]);
  }

}
