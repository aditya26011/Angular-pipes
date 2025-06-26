import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/student";

@Pipe({
    name:'filter'
})
export class FilterPipe implements PipeTransform{
    transform(list: Student[], filterby:string) {
        if(filterby.toLowerCase()==='all'|| filterby===''|| list.length===0){
            return list;
        }else{
          return  list.filter((std)=>{
               return std.gender.toLowerCase()===filterby.toLowerCase()
            })
        }
    }
}