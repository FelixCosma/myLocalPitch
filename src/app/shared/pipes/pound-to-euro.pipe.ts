import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'poundToEuro'})
export class GBPtoEURPipe implements PipeTransform {
  transform(value: any) {
    if (!value) {
      return '';
    }
    return (+value * 1.1502).toFixed(2);
  }
}
