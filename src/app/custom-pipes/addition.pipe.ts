import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'add'})
export class AdditionPipe implements PipeTransform {
  transform(value: any, add: string): any { 
      let ad:any = parseFloat(add); 
      return (ad)-(-value) 
  
}

}