import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'details'
})
export class DetailsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value !== undefined && value !== null) return value;
    else return "No details"
  }

}
