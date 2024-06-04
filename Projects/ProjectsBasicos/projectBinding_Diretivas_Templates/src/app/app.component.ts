import { Component, input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  inputText = "Texto Inicial Alterado";
  inputType = "text";
  isDisabled = false;

  buttonTitle = "Titutlo do btn"

  enableInput(){
    this.isDisabled = false;
  }

  disableInput(){
    this.isDisabled = true;
  }

  setTextInput(){
    this.inputType = "text";
  }

  setPasswordInput(){
    this.inputType = "password";
  }

  logInputText(){
    console.log(this.inputText);
  }
}
