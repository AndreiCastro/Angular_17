import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',  
  styleUrl: './card.component.scss'
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