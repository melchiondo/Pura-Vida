import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarProducto(termino:string){
    // console.log(this.buscarProducto(termino));
    // console.log(termino);
    this.router.navigate(['/buscar',termino]);
  }
}
