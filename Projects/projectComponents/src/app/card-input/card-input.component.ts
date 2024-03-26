import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-input',
  templateUrl: './card-input.component.html',
  styleUrl: './card-input.component.scss'
})
export class CardInputComponent {
  /*planType e planPrice estão no app.components, e estou exportando eles de lá. Sempre usar [] quando to work com @Input()
  @Input('aliasName') cardPlanType: string =''; Pode usar alias pro cardPlanType e o app.component.html referencia ele como: [aliasName]
  @Input({required: true}) cardPlanType: string =''; Esse Input passa a ser required no app.component.html.
  */
  @Input() cardPlanType: string ='';
  @Input() cardPlanPrice: number = 0;
  
  
  buttonClicked(test: boolean){
    console.log('buttonClicked');
  }

}
