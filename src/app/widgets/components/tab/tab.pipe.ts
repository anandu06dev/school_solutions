import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabPipe'
})
export class TabPipe implements PipeTransform {

  transform(value: any, url:string): boolean {
    console.log(value,url)
    if(url){
      return url.toLowerCase().includes(value.label.toLowerCase())
    }else{
      return false;
    }

  }

}
