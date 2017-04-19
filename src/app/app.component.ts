import { Component } from '@angular/core';
import {CitylistComponent} from './citylist/citylist.component'
import {Observable} from '../../node_modules/rxjs/Observable'
import {AjaxdataService} from './ajaxdata.service'
import {Listdata} from './listdata'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CitylistComponent,AjaxdataService]
})
export class AppComponent {
  public showcitylist:boolean=true;
  public citylist:Array<string>=['上海','北京','苏州','杭州','南京'];
  public busdata:Observable<Listdata>;
  public busnumber:string;
  private current:string=this.citylist[0];
  constructor(private ajaxdataService:AjaxdataService){

  }
  selectedCity(item:string){
    if(this.current!=item){
      
      this.busdata=undefined;
      this.current=item;
    }
    this.showcitylist=true;
  }
  search(current,busnumber){
    console.log(current,busnumber)
    let url='http://127.0.0.1:3000/citybus';
    let option={city:current,bus:busnumber};
    this.ajaxdataService.ajaxdata(url,option).subscribe(result=>this.busdata=result);
  }
  changecity(){
    this.showcitylist=!this.showcitylist;
  }
}
