import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { KaspiComponent } from './components/kaspi/kaspi.component';
import { SberComponent } from './components/sber/sber.component';
import { HalyqComponent } from './components/halyq/halyq.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    KaspiComponent,
    SberComponent,
    HalyqComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
