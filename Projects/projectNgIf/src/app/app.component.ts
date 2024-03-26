import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  minhaProp = true;  
  minhaProp2 = false;

  toggleProp(){
    this.minhaProp = !this.minhaProp;
  }

  buttonThen(){
    this.minhaProp2 = !this.minhaProp2;
  }
}
