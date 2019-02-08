import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeLeft',
  pure: false
})
export class TimeLeftPipe implements PipeTransform {
  
  transform(value: any, args?: any): any {
    const difference = (value - Date.now())/1000
    const min = difference / 60
    const hour = min / 60
    const second = difference % 60
    
    return hour.toFixed() + ':' + min.toFixed() + ':' + second.toFixed();
  }
  
}
