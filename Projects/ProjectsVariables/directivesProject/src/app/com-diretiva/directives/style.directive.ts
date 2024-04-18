import { Directive, HostBinding } from "@angular/core";

@Directive({
    selector: '[appStyle]'
})
export class StyleDirective {
    //Usei o hostbinding para alterar o css das tags tbm
    @HostBinding('style.backgroundColor') bgColor = 'gray'
    @HostBinding('style.fontSize') bgHeight = '25px'
}