import { Pipe,PipeTransform } from "@angular/core";

@Pipe({
    name:'percentage'
})
export class PercentagePipe implements PipeTransform{
    //here value is the value that is before the | in html
    transform(value: number, total:number,decimal:number=0) {
        console.log("Percentage pipe is called")
       return (value/total*100).toFixed(decimal)+'%';
    }

}