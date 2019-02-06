import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BarchartComponent } from './barchart/barchart.component'

import { ChartsModule } from 'ng2-charts';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BarchartComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
