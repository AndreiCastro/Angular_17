import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  fontSize: number = 15;
  textColor: 'purple' | 'red' = 'purple';
  buttonText: 'Purple' | 'Red' = 'Red';

  increaseFontSize(){
    this.fontSize += 5;
  }

  toggleFontColor(){
    if(this.textColor === 'purple'){
      this.textColor = 'red';
      this.buttonText = 'Purple'
    } else {
      this.textColor = 'purple';
      this.buttonText = 'Red'
    }
  }

}
