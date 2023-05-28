import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usdToinr'
})
export class UsdToinrPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const [x] = args;
    return value*x;
  }

}
