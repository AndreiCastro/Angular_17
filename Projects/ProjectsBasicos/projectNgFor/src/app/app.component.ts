import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //array simples
  listPessoas = ['Andrei', 'João', true, 1000];

  //array objects
  listPeople = [
    {name: 'Andrei', age : 32},
    {name: 'Mayara', age : 32},
    {name: 'Maria', age : 64},
    {name: 'José', age : 70},
  ];

  personSelectIndex: number | undefined;

  selectPerson(index: number){
    console.log(index)
    this.personSelectIndex = index;
  }
}
