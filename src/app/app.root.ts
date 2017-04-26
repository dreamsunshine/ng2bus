import {Component} from '@angular/core'
@Component({
  selector:'app',
  template:`
    <router-outlet></router-outlet>
    <div class="bottombox">
      <div class="bottomtabs">
        <div class="tab buslistsearch" routerLinkActive='active'><a routerLink='/home' routerLinkActive='active'>公交查询</a></div>
        <div class="tab busstationsearch"  routerLinkActive='active'><a routerLink='/station' routerLinkActive='active'>公交站台车辆查询</a></div>
        <div class="tab busexchangesearch"  routerLinkActive='active'><a routerLink='/transfer' routerLinkActive='active'>公交换乘查询</a></div>
      </div>
    </div>
  `
})
export class Approot{

}