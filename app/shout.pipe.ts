
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shout'
})
export class ShoutPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value )
    return '';
    return value.toString().toUpperCase();
  }

}
