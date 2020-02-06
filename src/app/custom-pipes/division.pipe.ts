import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'divide'})
export class DivisionPipe implements PipeTransform {
  transform(value: number, divide: string): number { 
      let div:number = parseFloat(divide); 
      return div/value;
  
}

}