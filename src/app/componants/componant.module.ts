import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RejesterComponent } from './rejester/rejester.component';
import { TodoComponent } from './todo/todo.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    LoginComponent,
    RejesterComponent,
    TodoComponent,

  ],
  imports: [
    CommonModule,
    FormsModule
  ],
exports :[
  LoginComponent,
    RejesterComponent,
    TodoComponent,

]
})
export class ComponantModule { }
