import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timesplit'
})
export class TimesplitPipe implements PipeTransform {

  transform(value: any): any {
    return value.slice(0,2)+':'+value.slice(2,4);
  }

}
