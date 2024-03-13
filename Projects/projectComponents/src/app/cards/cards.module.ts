import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { CardRoxoComponent } from '../card-roxo/card-roxo.component';
import { CardButtonComponent } from '../card-button/card-button.component';
import { CardRoxoButtonComponent } from '../card-roxo-button/card-roxo-button.component';
import { CardCancelButtonComponent } from '../card-cancel-button/card-cancel-button.component';

@NgModule({
  declarations: [
    CardComponent,
    CardRoxoComponent,
    CardButtonComponent,
    CardRoxoButtonComponent,
    CardCancelButtonComponent
  ],  
  imports: [
    CommonModule
  ],
  exports: [
    //Sempre que to need utilizar component de um modulo, deve importar o Modulo todo.
    //Para isso declare (declarations) e exporte (exports) os componentes.
    //Já na file app.module importar (imports) o modulo, para utilizar seus components.
    
    //PS: Comentei os cards de button, pois eles são chamados dentro do próprio component card e card-roxo (html), 
    //e esses components já estão sendo declarados aqui embaixo. Como os components buttons são chamados dentro do 
    //modulo app.component.html, não precisa exportá-los pois serão utilizados dentro do próprio modulo App.
    
    CardComponent,
    CardRoxoComponent,
    // CardButtonComponent,
    // CardRoxoButtonComponent
  ]
})
export class CardsModule { }
