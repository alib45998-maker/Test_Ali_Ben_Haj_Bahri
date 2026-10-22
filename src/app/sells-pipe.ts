import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sells',
})
export class SellsPipe implements PipeTransform {
  transform(n : number): string {
    return n / 1000 + "k";
  }
}
