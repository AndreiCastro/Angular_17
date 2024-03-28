import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  //Two way data binding é a junção de Input com Output, por isso no html usei [()]. []=Input - ()=Output
  
  name: string = 'Andrei';
  
  handleInputChange(event: string){
    console.log(event);
  }

}

