import { Component } from '@angular/core';
import { TodosService } from './services/todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoApp';

  constructor(private todoService :TodosService){}
  isVisibleRegester :boolean =false;
  isVisibleLogin :boolean =true;

  isVisibleTodo :boolean =true;

  showRegisterPage(){
    if(!this.isVisibleRegester){
      this.isVisibleRegester = true;
      this.isVisibleLogin = false;

    }
  }
  showLoginPage(){
    if(!this.isVisibleLogin){
      this.isVisibleLogin = true;
      // this.isVisibleTodo = false;
      this.isVisibleRegester = false;

    }
  }

}
