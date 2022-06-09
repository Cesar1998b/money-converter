import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

const money = {
  USD: 0,
  YEN: 0
}

@Injectable({
  providedIn: 'root'
})
export class Service{

  private usd$ = new BehaviorSubject<number>(money.USD);
  private yen$ = new BehaviorSubject<number>(money.YEN);

  constructor() { }

  get selectUsd$(): Observable<number> {
    return this.usd$.asObservable();
  }

  setUsd(usd:number):void{
    this.usd$.next(usd);
  }

  get selectYen$(): Observable<number> {
    return this.yen$.asObservable();
  }

  setYen(yen:number):void{
    this.yen$.next(yen);
  }
}
