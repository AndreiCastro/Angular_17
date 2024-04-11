import { Component, ElementRef, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @ViewChild('meuInput') meuInputEl!: ElementRef<HTMLInputElement>;

  @ViewChild('minhaDiv') minhaDivEl!: ElementRef<HTMLDivElement>;

  updateInputText(){
    this.meuInputEl.nativeElement.value = 'Update Text';
  }

  focus(){
    this.meuInputEl.nativeElement.focus();
  }  

  updateDivContent(){
    this.minhaDivEl.nativeElement.textContent = 'Update Content';
  }

  // Para baixo component filho
  // Fazendo assim, consigo acessar as variaveis e metodos do component filho
  // não só acessar como mudar seus valores tbm
  @ViewChild('filhoComp') filhoCompRef!: FilhoComponent
  hello(){
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Cliquei no Alert, chance text';
  }

}
