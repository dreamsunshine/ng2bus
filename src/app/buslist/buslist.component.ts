import { Component, OnInit,Input,Output } from '@angular/core';
import {Listdata} from '../listdata';

@Component({
  selector: 'app-buslist',
  templateUrl: './buslist.component.html',
  styleUrls: ['./buslist.component.css']
})
export class BuslistComponent implements OnInit {
  @Input() listdata:Listdata;
  constructor() { }

  ngOnInit() {
    
  }

}
