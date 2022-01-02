import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabPipe'
})
export class TabPipe implements PipeTransform {

  transform(value: any, ...args: any[]): boolean {
    if(args[0]){
      return args[0].toLowerCase().includes(value.label.toLowerCase())
    }else{
      return false;
    }

  }

}
