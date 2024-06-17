import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StatusClassPipe } from '../pipes/status-class.pipe';
import { TruncatePipe } from '../pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StatusClassPipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
