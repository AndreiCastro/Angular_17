import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card-button',  
  
  // templateUrl: './card-button.component.html',
  template: '<div class="card-button">Comprar</div>',
  //o template substitui o templateUrl, como o cod é pequeno pode coloca-lo aqui, mas sempre utilize o templateUrl 
  //para ficar cod padronizado.
  
  styleUrl: './card-button.component.scss'
  //style também faz a msm coisa que o template, substituindo o styleUrl
  //Se estiver assim styleUrl: ['path'], ['otherPath'], (dentro de conchetes [])significa que tem pode referenciar 
  //mais de um file of css para esse html, mas sempre padronize tudo em um file só. 
  //Tbm pode-se referenciar outros componente, ex styleUrl: '../card-roxo-button'

})
export class CardButtonComponent {
  @Output() buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick(){
    console.log('onButtonClick');
    this.buttonClickEmitter.emit(true);
  }
}
