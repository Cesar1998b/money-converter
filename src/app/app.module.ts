import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Service } from './service/service.service';
import { UsdComponent } from './usd/usd.component';
import { YenComponent } from './yen/yen.component';

@NgModule({
  declarations: [
    AppComponent,
    UsdComponent,
    YenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
