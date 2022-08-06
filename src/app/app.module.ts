import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RejesterComponent } from './componants/rejester/rejester.component';
import { TodoComponent } from './componants/todo/todo.component';

@NgModule({
  declarations: [
    AppComponent,

    RejesterComponent,
     TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
