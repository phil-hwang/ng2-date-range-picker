import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DateRangePirckerComponent } from './date-range-pircker/date-range-pircker.component';
import {DpDatePickerModule} from "ng2-date-picker";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    DateRangePirckerComponent
  ],
  imports: [
    BrowserModule,
    DpDatePickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
