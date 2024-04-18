import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SemDiretivaComponent } from './sem-diretiva/sem-diretiva.component';
import { ComDiretivaComponent } from './com-diretiva/com-diretiva.component';
import { HighLightDirective } from './com-diretiva/directives/highlight.directive';
import { DisabledDirective } from './com-diretiva/directives/disabled.directive';
import { StyleDirective } from './com-diretiva/directives/style.directive';
import { ListenerDirective } from './com-diretiva/directives/listener.directive';
import { InputBackgroundDirective } from './com-diretiva/directives/input-background.directive';

@NgModule({
  declarations: [
    AppComponent,
    SemDiretivaComponent,
    ComDiretivaComponent,
    HighLightDirective,
    DisabledDirective,
    StyleDirective,
    ListenerDirective,
    InputBackgroundDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
