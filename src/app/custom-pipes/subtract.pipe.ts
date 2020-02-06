import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'subtract'})
export class SubtractPipe implements PipeTransform {
  transform(value: number, subtract: string): number { 
      let sub:number = parseFloat(subtract); 
      return sub-value 
  
}

}