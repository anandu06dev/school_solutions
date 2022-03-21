import { Pipe, PipeTransform } from '@angular/core';
import { convert } from '../utils/fees.util';

@Pipe({
  name: 'numberToLetter',
})
export class NumberToLetterPipe implements PipeTransform {
  transform(value: any): any {
    try {
      value = Number(value);
      if (value) return convert(value);
      if (value === 0) return convert(value);

      return;
    } catch (e) {
      return;
    }
  }
}
