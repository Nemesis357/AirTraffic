import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value !== undefined && value !== null)
      return value.replace(/ /g, '').toLowerCase();
    else
      return value;
  }

}
