import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VisitaWebModel } from '../models/visitaWeb.model';
import { VisitaProductModel } from '../models/visitaProduct.model';
import { map } from 'rxjs/operators';


@Injectable()
export class MetricsService {

  private urlFirebase = 'https://puravida-web.firebaseio.com';

  constructor( private http: HttpClient) { }

  crearVisitaWeb(visitaWeb: VisitaWebModel){
    return this.http.post(`${this.urlFirebase}/visitaWeb.json`, visitaWeb);
  }

  crearVisitaProduct(visitaProduct: VisitaProductModel){
    return this.http.post(`${this.urlFirebase}/visitaProduct.json`, visitaProduct);
  }

  getVisitasWeb(){
    return this.http.get(`${this.urlFirebase}/visitaWeb.json`)
      .pipe(
        map(this.crearArregloVisitasWeb)
      );
  }

  crearArregloVisitasWeb( visitaObj: object){
    const visitasWeb: VisitaWebModel[] = [];

    if(visitaObj === null){
      return [];
    }

    Object.keys(visitaObj).forEach( key => {
        const visita: VisitaWebModel = visitaObj[key];
        visitasWeb.push(visita);
    });

    return visitasWeb;
  }
  getVisitasProduct(){
    return this.http.get(`${this.urlFirebase}/visitaProduct.json`)
      .pipe(
        map(this.crearArregloVisitasProduct)
      );
  }

  crearArregloVisitasProduct( visitaObj: object){
    const visitasProduct: VisitaProductModel[] = [];

    if(visitaObj === null){
      return [];
    }

    Object.keys(visitaObj).forEach( key => {
        const visita: VisitaProductModel = visitaObj[key];
        visitasProduct.push(visita);
    });

    return visitasProduct;
  }

}
