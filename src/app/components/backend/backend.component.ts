import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../../services/metrics.service';
import { VisitaWebModel } from '../../models/visitaWeb.model';
import { VisitaProductModel } from '../../models/visitaProduct.model';


@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html'
})
export class BackendComponent implements OnInit {

  private visitasWeb: VisitaWebModel[] = [];
  private visitasProduct: VisitaProductModel[] = [];

  constructor(private _metricsService: MetricsService) {

    this._metricsService.getVisitasWeb().subscribe( resp => {
      this.visitasWeb = resp;
    });

    this._metricsService.getVisitasProduct().subscribe( resp => {
      this.visitasProduct = resp;
    });

  }

  ngOnInit() {
  }

}
