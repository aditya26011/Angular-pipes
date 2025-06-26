import { Pipe, PipeTransform } from "@angular/core";
import { Student } from "../Models/student";

@Pipe({
    name:'filter',
    pure:false// by default pure
})
export class FilterPipe implements PipeTransform{
    transform(list: Student[], filterby:string) {
        console.log("Filter pipe called")
        if(filterby.toLowerCase()==='all'|| filterby===''|| list.length===0){
            return list;
        }else{
          return  list.filter((std)=>{
               return std.gender.toLowerCase()===filterby.toLowerCase()
            })
        }
    }
}