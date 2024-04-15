import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appHighlight]',
})

export class HighLightDirective {
    //@HostBinding e @HostListener são diretivas.
    
    //@HostBinding serve para utilizar o css colocando a logica no components
    @HostBinding('style.background-color') bgColor = 'transparent';

    //@HostListener serve para utilizar o event em html, neste caso estou alterando 
    //a background do paragrafo utilizando o mouseOver e Out.
    @HostListener('mouseover') mouseOver() {
        console.log('aqui')
        this.bgColor = 'orange';
    }

    @HostListener('mouseout') mouseOut() {
        this.bgColor = 'transparent';
    }
}