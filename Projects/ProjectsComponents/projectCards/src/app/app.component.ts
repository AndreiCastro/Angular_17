import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // buttonClicked(){
  //   console.log('button clicked');
  // } comentado aqui e no app.component.html

  onCardButtonClicked(){
    console.log('onCardButtonClicked');
    //Se tivesse chamada HTTP, seria aqui o endpoint
  }

  planSimples = 'Simples';
}
