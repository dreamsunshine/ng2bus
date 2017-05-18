import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price'
})
export class PricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let price:any='';
    if (value==''||(value!=''&&value==0)){
      price='未知';
    }else{
      price=parseFloat(value).toFixed(args[0])
    }
    return price;
  }

}
