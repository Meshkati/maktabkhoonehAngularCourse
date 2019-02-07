import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'persianNumber'
})
export class PersianNumberPipe implements PipeTransform {
    transform(value: any) {
        let result: string = value.toString()
        result = result.replace(/[0123456789]/g, (c) => {
            return {
                "1": "۱",
                "2": "۲",
                "3": "۳",
                "4": "۴",
                "5": "۵",
                "6": "۶",
                "7": "۷",
                "8": "۸",
                "9": "۹",
                "0": "۰"
            }[c];
        });

        return result;
    }
}