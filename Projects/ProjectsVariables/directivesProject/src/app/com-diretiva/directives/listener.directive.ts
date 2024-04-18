import { Directive, HostListener } from "@angular/core";

@Directive({
    selector: '[appListener]'
})
export class ListenerDirective {
    //desta forma vc pode mudar o evento, tirando ele do 
    //html e deixando tudo aqui na directive
    @HostListener('click')
    onClick(){
        console.log('click')
    }

    @HostListener('keyup', ['$event'])
    onKeyUp(event: KeyboardEvent){
        const fullText = (event.target as HTMLInputElement).value;
        console.log(fullText);
    }
}