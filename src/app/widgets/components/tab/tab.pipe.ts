import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabPipe'
})
export class TabPipe implements PipeTransform {

  transform(value: any, url:string) {  

    if(url.includes('forms'))return 'forms';
    if(url.includes('table'))return 'table'
    if(url.includes('grid'))return 'grid'
    if(url.includes('list'))return 'list'
    return value;


    // console.log(value,url)
    // if(url){
    //   return url.toLowerCase().includes(value.label.toLowerCase())
    // }else{
    //   return false;
    // }
  }

}
