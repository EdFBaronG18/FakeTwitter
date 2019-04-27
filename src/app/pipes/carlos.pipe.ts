import { Pipe, PipeTransform } from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Pipe({
  name: 'carlos'
})
export class CarlosPipe implements PipeTransform {

  transform(value: String, args?: any): any {
    console.log(value);
    let result ="";
    for(let i=0; i<value.length; i++){
      if(i%2==0){
        result+= value.charAt(i).toUpperCase();
      }else{
        result+= value.charAt(i).toLowerCase();
      }
    }
    return result;
  }

}
