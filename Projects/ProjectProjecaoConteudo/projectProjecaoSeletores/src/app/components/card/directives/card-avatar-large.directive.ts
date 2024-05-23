import { Directive } from '@angular/core';

@Directive({
  selector: 'app-card-avatar-large',
  host: { class: 'ca-u-card-avatar-large'} //chama o styles.scss para add o style nesta directive
})
export class CardAvatarLargeDirective {

  constructor() { }

}
