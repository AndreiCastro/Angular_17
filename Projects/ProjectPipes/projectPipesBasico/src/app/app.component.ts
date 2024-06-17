import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  pessoa = {
    name: 'Andrei',
    status: 1
  };

  pessoa2 = {
    name: 'Mayara',
    status: 2
  };

  pessoa3 = {
    name: 'Aline',
    status: 3
  };

  pessoa4 = {
    name: 'Maria',
    status: 4
  }

  user = {
    nome: 'Andrei',
    idade: 32,
  };
}
