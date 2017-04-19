import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BuslistComponent } from './buslist/buslist.component';
import { CitylistComponent } from './citylist/citylist.component';
// import {AjaxdataService} from './ajaxdata.service'

@NgModule({
  declarations: [
    AppComponent,
    BuslistComponent,
    CitylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
