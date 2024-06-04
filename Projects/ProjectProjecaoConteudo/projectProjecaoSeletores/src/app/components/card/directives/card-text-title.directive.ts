import { Directive } from '@angular/core';

@Directive({
  //selector: 'app-card-text-title',
  // pode-se criar diretivas com multiplos Seletores, só add no selector mais 1, e no html chamar a tag q irá utiizar, ex:
  selector: 'app-card-text-title, [appCardTextTitle]',
  host: {'class': 'ca-u-card-text-title'} //Aqui onde vc referencia o css, no style.scss tem essa classe 
})
export class CardTextTitleDirective {
}
