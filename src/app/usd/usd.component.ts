import { Component } from '@angular/core';
import { Service } from './../service/service.service';

@Component({
  selector: 'app-usd',
  templateUrl: './usd.component.html',
  styleUrls: ['./usd.component.scss']
})
export class UsdComponent {

  yenDisplayText: number;
  usdDisplayText = this.service.selectUsd$;

  constructor(private service: Service) { }

  convertToYen(newUsd: any) {
    this.yenDisplayText = newUsd * 113;
    this.service.setYen(this.yenDisplayText);
  }

  getYenDisplayText() {
    return this.yenDisplayText;
  }

}
