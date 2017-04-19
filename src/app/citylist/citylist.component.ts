import { Component, OnInit,Input,Output,EventEmitter,OnChanges } from '@angular/core';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.css']
})
export class CitylistComponent implements OnInit {
  @Input() showcitylist:boolean;
  @Input() citylist:Array<string>;
  @Output('selectedCity') private selectedCity:EventEmitter<string>=new EventEmitter<string>();
  // public citylist:Array<string>;
  private current:number=0;
  constructor() {
    
   }

  citySelect(i:number){
    if(i!=this.current){
      this.current=i;
      this.selectedCity.emit(this.citylist[i]);
    }else{
      this.selectedCity.emit(this.citylist[this.current]);
    }
    
  }
  
  ngOnInit() {
    // this.selectedCity.emit(this.citylist[this.current]);
  }
  
}
