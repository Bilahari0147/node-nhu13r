import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform {

    transform(items: Array<any>, searchTerm: string){
        const regexExp = new RegExp(searchTerm);
        return items.filter( item => item.name.match(regexExp))


    }

}