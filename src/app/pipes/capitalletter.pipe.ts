import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalletter',
})
export class CapitalletterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value[0].toUpperCase() + value.slice(1);
  }
}
