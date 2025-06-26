import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'percentage'
})
export class PercentagePipe implements PipeTransform{
    //here value is the value that is before the | in html
    transform(value: number, total:number,decimal:number=0) {
       return (value/total*100).toFixed(decimal)+'%';
    }

}