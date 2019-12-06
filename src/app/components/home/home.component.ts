import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../services/metrics.service';
import { VisitaWebModel } from '../../models/visitaWeb.model';
import { isDevMode } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  visitaWeb: VisitaWebModel = new VisitaWebModel();

  constructor(private _metricsService: MetricsService) {
    window.scroll(0, 0);

    if(!isDevMode()){
      this.generarVisitaWeb();
    }

  }

  generarVisitaWeb(){
    let d:Date = new Date;
    d.setHours(d.getHours()-3); // resto 3 horas porque el servidor de FIREBASE está en EEUU
    this.visitaWeb.timestamp = d;

    this._metricsService.crearVisitaWeb( this.visitaWeb)
    .subscribe( resp=> {
      console.log(resp);
    });
  }

}
