import {Routes,RouterModule} from '@angular/router'
import {AppComponent} from './app.component'
import {StationComponent} from './station/station.component'
import {TransferComponent} from './transfer/transfer.component'
const routes:Routes=[
  {path:'home',component:AppComponent},
  {path:'station',component:StationComponent},
  {path:'transfer',component:TransferComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'}
]

export const myRoute=RouterModule.forRoot(routes);