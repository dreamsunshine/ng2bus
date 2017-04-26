import { Component,OnInit,ElementRef } from '@angular/core';
import {CitylistComponent} from './citylist/citylist.component'
import {Observable} from '../../node_modules/rxjs/Observable'
import '../../node_modules/rxjs/add/operator/debounceTime'
import '../../node_modules/rxjs/add/operator/distinctUntilChanged'
import '../../node_modules/rxjs/add/operator/switchMap'
import {Subject} from '../../node_modules/rxjs/Subject'
import {AjaxdataService} from './ajaxdata.service'
import {Listdata} from './listdata'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CitylistComponent,AjaxdataService]
})
export class AppComponent implements OnInit {
  public showcitylist:boolean=true;
  public citylist:Array<string>=['上海','北京','苏州','杭州','南京'];
  public busdata:Observable<Listdata>;
  public busnumber:string;
  private current:string=this.citylist[0];
  constructor(private ajaxdataService:AjaxdataService,private el:ElementRef){

  }
  private searchTermStream=new Subject<any>();
  selectedCity(item:string){
    if(this.current!=item){
      
      this.busdata=undefined;
      this.current=item;
    }
    this.showcitylist=true;
    this.busnumber=='';
  }
  search(current,busnumber){
    let url='http://127.0.0.1:3000/citybus';
    let option={city:current,bus:busnumber};
    let params={url:url,option:option};
    this.searchTermStream.next(params);
    // this.ajaxdataService.ajaxdata(url,option).subscribe(result=>this.busdata=result.result);
  }
  changecity(){
    this.showcitylist=!this.showcitylist;
  }
  ngOnInit(){
    this.searchTermStream
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap((params)=>this.ajaxdataService.ajaxdata(params.url,params.option))
      .subscribe(result=>this.busdata=result.result)
  }
  showdetail(num:number){
    let el=this.el.nativeElement;
    console.log(num,el)
  }
}
