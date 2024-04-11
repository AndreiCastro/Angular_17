import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',  
  styleUrl: './card.component.scss'
  /*
  , encapsulation: ViewEncapsulation.None 
  Serve para deixar o css deste componente global. Resumindo não serve pra nada já que se for usar css global, 
  utilize a classe styles.scss
  
  , encapsulation: ViewEncapsulation.ShadowDom   
  O css definido nesse component tem prioridade max sobre ele, msm se tiver estilos diferentes na classe global styles.scss, 
  prevalece o que está aqui*/
})
export class CardComponent {
    
  plano = {
    infos: {
      tipo: "Simples",
      preco: "R$ " + 100 + ",00/Mês"
    }
  }

  // getTipo(){
  //   return "Function Simples"
  // }
}
