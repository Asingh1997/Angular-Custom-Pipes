import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'module'})
export class ModulusPipe implements PipeTransform {
  transform(value: number, module: string): number { 
      let mod:number = parseFloat(module); 
      return mod%value;
  
}

}