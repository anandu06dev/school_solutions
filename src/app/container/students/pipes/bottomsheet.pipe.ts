import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sanitizecamelcaseString'
})
export class BottomsheetPipe implements PipeTransform {

  transform(value:string,replaceString:string,camelcaseString:boolean): any {

    value = replaceString ? value.replace(/replaceString/g,'') : value;

    value = camelcaseString ? value.replace(/([a-z])([A-Z])/g, '$1 $2') : value;
    return value;
  }

}
