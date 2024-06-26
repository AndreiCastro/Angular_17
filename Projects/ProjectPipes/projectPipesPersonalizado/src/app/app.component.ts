import { Component } from '@angular/core';

export enum UserStatusEnum{
  ATIVO = 1,
  INATIVO = 2,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  user = {
    nome: 'Andrei',
    idade: 32,
    status: UserStatusEnum.ATIVO
  };
}
