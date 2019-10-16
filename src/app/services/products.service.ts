import { Injectable } from '@angular/core';

@Injectable()
export class ProductsService {

  private products:Product[] =
  [
      {
        id: "1",
        nombre: "Bikini Punta Cana",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Amarillo"],
        descCorta: "Bikini sin costura Amarilla con volados por encima de la tasa",
        descLarga: "Esta Bikini sin costura amarilla consta de dos finas piezas con volados por encima de la tasa. Un conjunto perfecto para el calce, muy cómodo para el uso",
        imgPortada: "assets/img/productos/Malla1.jpeg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "700,00",
        moneda: "peso",
      },
      {
        id: "2",
        nombre: "Enteriza Barú",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Negro"],
        descCorta: "Bikini sin costura Rosa con volados por debajo de la tasa",
        descLarga: "Esta Bikini sin costura rosa consta de dos finas piezas con volados por debajo de la tasa. Un conjunto perfecto para el calce, muy cómodo para el uso",
        imgPortada: "assets/img/productos/Malla2.jpeg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "800,00",
        moneda: "peso",
      },
      {
        id: "3",
        nombre: "Bikini Tulum",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Rojo"],
        descCorta: "Bikini sin costura Amarilla con volados",
        descLarga: "Esta Bikini sin costura Amarilla consta de dos finas piezas con volados perfecta para el calce",
        imgPortada: "assets/img/productos/Malla3.jpeg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "700,00",
        moneda: "peso",
      },
      {
        id: "4",
        nombre: "Short",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Rojo"],
        descCorta: "Bikini sin costura Amarilla con volados",
        descLarga: "Esta Bikini sin costura Amarilla consta de dos finas piezas con volados perfecta para el calce",
        imgPortada: "assets/img/productos/Malla4.jpeg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "350,00",
        moneda: "peso",
      },
      {
        id: "5",
        nombre: "Bikini Varadero",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Rojo"],
        descCorta: "Bikini sin costura Amarilla con volados",
        descLarga: "Esta Bikini sin costura Amarilla consta de dos finas piezas con volados perfecta para el calce",
        imgPortada: "assets/img/productos/Malla5.jpeg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "650,00",
        moneda: "peso",
      },
      {
        id: "6",
        nombre: "Bikini Copacabana",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Rojo"],
        descCorta: "Bikini sin costura Amarilla con volados",
        descLarga: "Esta Bikini sin costura Amarilla consta de dos finas piezas con volados perfecta para el calce",
        imgPortada: "assets/img/productos/nueva1.jpg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "450,00",
        moneda: "peso",
      },
      {
        id: "7",
        nombre: "Bikini Buzios",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Rojo"],
        descCorta: "Bikini sin costura Amarilla con volados",
        descLarga: "Esta Bikini sin costura Amarilla consta de dos finas piezas con volados perfecta para el calce",
        imgPortada: "assets/img/productos/nueva2.jpg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "650,00",
        moneda: "peso",
      },
      {
        id: "8",
        nombre: "Bikini Cartagena",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Rojo"],
        descCorta: "Bikini sin costura Amarilla con volados",
        descLarga: "Esta Bikini sin costura Amarilla consta de dos finas piezas con volados perfecta para el calce",
        imgPortada: "assets/img/productos/nueva3.jpg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "650,00",
        moneda: "peso",
      },
      {
        id: "9",
        nombre: "Bikini Bora Bora",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Rojo"],
        descCorta: "Bikini sin costura Amarilla con volados",
        descLarga: "Esta Bikini sin costura Amarilla consta de dos finas piezas con volados perfecta para el calce",
        imgPortada: "assets/img/productos/nueva4.jpg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "450,00",
        moneda: "peso",
      },
      {
        id: "10",
        nombre: "Bikini San Andrés",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Rojo"],
        descCorta: "Bikini sin costura Amarilla con volados",
        descLarga: "Esta Bikini sin costura Amarilla consta de dos finas piezas con volados perfecta para el calce",
        imgPortada: "assets/img/productos/nueva5.jpg",
        imgLista: [],
        temporada: "Temporada 19/20",
        marca: "Pura Vida",
        precio: "700,00",
        moneda: "peso",
      },
  ];

  constructor() {
    console.log("Servicio de Producto funcionando...");
  }

  getProducts():Product[]{
    return this.products;
  }

  getProduct( id:string ):Product{
    for(let product of this.products){
      if(product.id == id){
        return product;
      }
    }
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
  id: string;
  nombre: string;
  categoria: string;
  tipo: string;
  colores: string[];
  descCorta: string;
  descLarga: string;
  imgPortada: string;
  imgLista: string[];
  temporada: string;
  marca: string;
  precio: string;
  moneda: string;
};
