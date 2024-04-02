import { Component } from '@angular/core';
import { validateHeaderName } from 'http';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  foods = [
    {
      value: 'Teste',
      viewValue: 'Teste',
    }
  ];
}
