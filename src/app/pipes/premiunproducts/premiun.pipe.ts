import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'premiun'
})
export class PremiunPipe implements PipeTransform {

  transform(value: number): string {
    return null;
  }

}
