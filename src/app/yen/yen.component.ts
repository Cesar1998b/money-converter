import { Component } from '@angular/core';
import { Service } from './../service/service.service';

@Component({
  selector: 'app-yen',
  templateUrl: './yen.component.html',
  styleUrls: ['./yen.component.scss'],
})
export class YenComponent {

  usdDisplayText: number;
  yenDisplayText = this.service.selectYen$;

  constructor(private service: Service) {}

  convertToUsd(newYen: number) {
    this.usdDisplayText = newYen * 0.088;
    this.service.setUsd(this.usdDisplayText);
  }

  getUsdDisplayText() {
    return this.usdDisplayText;
  }
}
