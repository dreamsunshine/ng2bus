import { Injectable } from '@angular/core';
import {Jsonp,URLSearchParams,Response} from '@angular/http'
import {} from '@angular/compiler'
import {Observable} from '../../node_modules/rxjs/Observable'
import '../../node_modules/rxjs/add/operator/map'
import '../../node_modules/rxjs/add/operator/catch'
import { Listdata } from './listdata'

@Injectable()
export class AjaxdataService {

  constructor(private jsonp:Jsonp) { }
  ajaxdata(url:string,options:any){
    let dataurl=url;
    // let searchitem=JSON.stringify(options);
    let params=new URLSearchParams();
    params.set('bus',options.bus);
    params.set('city',options.city);
    params.set('format','json');
    params.set('callback','JSONP_CALLBACK');
    return this.jsonp.get(dataurl,{search:params}).map((response)=>response.json().data[0]).catch(this.handleError)
  }

  private handleError(error:Response|any){
    let errMsg:string;
    if(error instanceof Response){
      const body=error.json()||'';
      const err=body.error ||JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
