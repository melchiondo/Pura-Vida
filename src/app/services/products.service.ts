import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  private products:Product[] =
  [
      {
        nombre: "Bikini con volados",
        tipo: "Bikini 2 piezas",
        color: "Rojo",
        descCorta: "Bikini sin costura Amarilla con volados",
        descLarga: "Esta Bikini sin costura Amarilla consta de dos finas piezas con volados perfecta para el calce",
        imgPortada: "assets/img/productos/Malla1.jpeg",
        imgLista: ["assets/img/productos/Malla2.jpeg","assets/img/productos/Malla3.jpeg","assets/img/productos/Malla4.jpeg"],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "420,00",
        moneda: "peso"
      }
  ];

  constructor() {
    console.log("Servicio de Producto funcionando...");
  }

  getProducts():Product[]{
    return this.products;
  }

  getProduct( idx:number ):Product{
    return this.products[idx];
  }

  getProductSearched( nom:string ):Product{
    nom = nom.toLowerCase();
    for(let product of this.products){
      let prod = product.nombre.toLowerCase();
      if(prod == nom){
        return product;
      }
    }
  }

  buscarProductos( termino:string) :Product[]{
    let productsArray:Product[] = [];
    termino = termino.toLowerCase();
    for(let product of this.products){
      let prod = product.nombre.toLowerCase();
      if(prod.indexOf(termino) >= 0){
        productsArray.push(product);
      }
    }
    return productsArray;
  }

}

export interface Product{
  nombre: string;
  tipo: string;
  color: string;
  descCorta: string;
  descLarga: string;
  imgPortada: string;
  imgLista: string[];
  temporada: string;
  marca: string;
  precio: string;
  moneda: string;
};
