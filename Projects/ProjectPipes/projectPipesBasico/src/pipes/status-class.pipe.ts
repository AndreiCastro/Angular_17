import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'statusClass'
})

export class StatusClassPipe implements PipeTransform {
    transform(status: number): string {
        console.log('StatusClassPipe')
        
        const obj: {[key: number]: string} = {
            1: 'active',
            2: 'partial',
            3: 'blocked'
        }; 
        //as cores deste status estão no scss

        return obj[status];
    }
}