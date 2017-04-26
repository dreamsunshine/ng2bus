import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule,JsonpModule } from '@angular/http';
import {LocationStrategy,PathLocationStrategy,HashLocationStrategy,APP_BASE_HREF} from '@angular/common'
import { AppComponent } from './app.component';
import { BuslistComponent } from './buslist/buslist.component';
import { CitylistComponent } from './citylist/citylist.component';
// import {AjaxdataService} from './ajaxdata.service'
import {myRoute} from './mainrouter'
import {Approot} from './app.root';
import { TransferComponent } from './transfer/transfer.component';
import { StationComponent } from './station/station.component';
import { TimesplitPipe } from './timesplit.pipe'

@NgModule({
  declarations: [
    AppComponent,
    BuslistComponent,
    CitylistComponent,
    Approot,
    TransferComponent,
    StationComponent,
    TimesplitPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    myRoute
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [Approot]
})
export class AppModule { }
