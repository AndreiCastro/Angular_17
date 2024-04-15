import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {  
  buttonsList = [
    'Button 1',
    'Button 2',
    'Button 3',
  ]

  @ViewChildren('myButtons')
    buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  resetButtons(){    
    this.buttonsEl.forEach((btnEl) => {
      btnEl.nativeElement.style.backgroundColor = '';
      btnEl.nativeElement.style.color = 'black';
    });
  }

  changeColor(event: Event){
    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'orange';
    btnElement.style.color = 'white';
  }

  ngAfterViewInit() {
    const first = this.buttonsEl.toArray()[0];
    first.nativeElement.style.backgroundColor = 'green';
    first.nativeElement.style.color = 'white';
  }

  firstButton(){
    const first = this.buttonsEl.get(0);
    if(first != undefined){
      first.nativeElement.style.backgroundColor = '';
      first.nativeElement.style.color = 'black';
    }
  }
}
