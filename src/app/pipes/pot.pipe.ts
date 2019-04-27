import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pot'
})
export class PotPipe implements PipeTransform {

  transform(value: number, args?: any): any {
    return value*value;
  }

}
