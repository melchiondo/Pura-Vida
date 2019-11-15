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
        colores: ["Fucsia","Amarillo","Negro","Celeste","Rojo","Rosa bebé"],
        talles: ["1","2","3","4"],
        descCorta: "Conjunto 2 volados al hombro con culotless",
        descLarga: "Conjunto 2 volados al hombro con culotless",
        imgPortada: "assets/img/productos/Malla1.jpeg",
        imgLista: ["assets/img/productos/f1.jpeg","assets/img/productos/f2.jpeg"],
        temporada: "Temporada 2020",
        marca: "Pura Vida",
        precio: "700.00",
        moneda: "peso",
        descuento: "20",
      },
      {
        id: "2",
        nombre: "Enteriza Barú",
        categoria: "Bikinis",
        tipo: "Malla entera",
        colores: ["Fucsia","Amarillo","Negro","Rojo","Celeste","Rosa bebé"],
        talles: ["1","2","3","4"],
        descCorta: "Malla entera con 2 volados al hombro con less",
        descLarga: "Malla entera con 2 volados al hombro con less",
        imgPortada: "assets/img/productos/Malla2.jpeg",
        imgLista: ["assets/img/productos/f10.jpeg"],
        temporada: "Temporada 2020",
        marca: "Pura Vida",
        precio: "850.00",
        moneda: "peso",
        descuento: "30",
      },
      {
        id: "3",
        nombre: "Bikini Tulum",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Negro","Fucsia","Amarillo","Rojo","Celeste","Mostaza","Rosa bebé"],
        talles: ["1","2","3","4"],
        descCorta: "Conjunto 2 volados bajo con culotless",
        descLarga: "Conjunto 2 volados bajo con culotless",
        imgPortada: "assets/img/productos/Malla3.jpeg",
        imgLista: ["assets/img/productos/f3.jpeg","assets/img/productos/f8.jpeg"],
        temporada: "Temporada 2020",
        marca: "Pura Vida",
        precio: "700.00",
        moneda: "peso",
        descuento: "25",
      },
      {
        id: "4",
        nombre: "Short Floripa",
        categoria: "Shorts",
        tipo: "Boxer clásico",
        colores: ["Negro"],
        talles: ["3","4","5","6","7","8"],
        descCorta: "Short tipo boxer clásico",
        descLarga: "Short tipo boxer clásico",
        imgPortada: "assets/img/productos/Malla4.jpeg",
        imgLista: [],
        temporada: "Temporada 2020",
        marca: "Pura Vida",
        precio: "450.00",
        moneda: "peso",
        descuento: "20",
      },
      {
        id: "5",
        nombre: "Bikini Varadero",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Negro","Celeste","Fucsia","Blanco"],
        talles: ["1","2","3","4"],
        descCorta: "Conjunto con volados con colaless",
        descLarga: "Conjunto con volados con colaless",
        imgPortada: "assets/img/productos/Malla5.jpeg",
        imgLista: ["assets/img/productos/f5.jpeg","assets/img/productos/f6.jpeg"],
        temporada: "Temporada 2020",
        marca: "Pura Vida",
        precio: "700.00",
        moneda: "peso",
        descuento: "15",
      },
      // {
      //   id: "6",
      //   nombre: "Bikini Copacabana",
      //   categoria: "Bikinis",
      //   tipo: "Bikini 2 piezas",
      //   colores: ["Rojo"],
      //   talles: ["1","2","3","4"],
      //   descCorta: "",
      //   descLarga: "",
      //   imgPortada: "assets/img/productos/nueva1.jpg",
      //   imgLista: [],
      //   temporada: "Temporada 2020",
      //   marca: "Pura Vida",
      //   precio: "450,00",
      //   moneda: "peso",
      //   descuento: "20",
      // },
      // {
      //   id: "7",
      //   nombre: "Bikini Buzios",
      //   categoria: "Bikinis",
      //   tipo: "Bikini 2 piezas",
      //   colores: ["Verde fluor"],
      //   talles: ["1","2","3","4"],
      //   descCorta: "Bikini 2 piezas lisa con culotless",
      //   descLarga: "Bikini 2 piezas lisa con culotless",
      //   imgPortada: "assets/img/productos/nueva2.jpg",
      //   imgLista: [],
      //   temporada: "Temporada 2020",
      //   marca: "Pura Vida",
      //   precio: "650.00",
      //   moneda: "peso",
      //   descuento: "20",
      // },
      {
        id: "8",
        nombre: "Bikini Cartagena",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Negro"],
        talles: ["1","2","3","4"],
        descCorta: "Triángulo movible con colaless",
        descLarga: "Triángulo movible con colaless",
        imgPortada: "assets/img/productos/f4.jpeg",
        imgLista: [],
        temporada: "Temporada 2020",
        marca: "Pura Vida",
        precio: "700.00",
        moneda: "peso",
        descuento: "20",
      },
      {
        id: "9",
        nombre: "Bikini Bora Bora",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Negro"],
        talles: ["1","2","3","4"],
        descCorta: "Taza soft fija con vedetina",
        descLarga: "Taza soft fija con vedetina",
        imgPortada: "assets/img/productos/nueva4.jpg",
        imgLista: [],
        temporada: "Temporada 2020",
        marca: "Pura Vida",
        precio: "700.00",
        moneda: "peso",
        descuento: "30",
      },
      {
        id: "10",
        nombre: "Bikini San Andrés",
        categoria: "Bikinis",
        tipo: "Bikini 2 piezas",
        colores: ["Animal print"],
        talles: ["1","2","3","4"],
        descCorta: "Bikini taza soft fija animal print con colaless",
        descLarga: "Bikini taza soft fija animal print con colaless",
        imgPortada: "assets/img/productos/f9.jpeg",
        imgLista: [],
        temporada: "Temporada 2020",
        marca: "Pura Vida",
        precio: "700.00",
        moneda: "peso",
        descuento: "10",
      },
  ];

  constructor() {
    // console.log("Servicio de Producto funcionando...");
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
      let nom = product.nombre.toLowerCase();
      let cat = product.categoria.toLowerCase();
      let tip = product.tipo.toLowerCase();
      let dec = product.descCorta.toLowerCase();
      let del = product.descLarga.toLowerCase();

      if(nom.indexOf(termino) >= 0
      || cat.indexOf(termino) >= 0
      || tip.indexOf(termino) >= 0
      || dec.indexOf(termino) >= 0
      || del.indexOf(termino) >= 0){
        productsArray.push(product);
      }
    }
    return productsArray;
  }

  getCategorias() :String[]{
    let categArray:String[] = [];
    for(let product of this.products){
      if(categArray.indexOf(product.categoria)){
        categArray.push(product.categoria);
      }
    }
    return categArray;
  }

}

export interface Product{
  id: string;
  nombre: string;
  categoria: string;
  tipo: string;
  colores: string[];
  talles: string[];
  descCorta: string;
  descLarga: string;
  imgPortada: string;
  imgLista: string[];
  temporada: string;
  marca: string;
  precio: string;
  moneda: string;
  descuento: string;
};
