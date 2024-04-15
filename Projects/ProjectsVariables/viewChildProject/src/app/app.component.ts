import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit{  
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

  ngOnInit(){
    // this.meuInputEl.nativeElement.focus();
  }

  ngAfterViewInit() {
    //Implementando o AfterViewInit na class, usa-se o method ngAfterViewInit, que carrega após
    //o componentes serem carregados. Neste caso para usar o foco assim que carrega a tela preciso 
    //colocá-lo no AterViewInit, pois no OnInit o elemento meuInputEl ainda está como undefined.
    this.meuInputEl.nativeElement.focus();
  }  

}
