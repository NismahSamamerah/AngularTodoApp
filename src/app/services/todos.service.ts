import { Injectable } from '@angular/core';
import { ITodos } from '../interfaces/todosInterface';

@Injectable({
  providedIn: 'root'
})
export class TodosService {
isVisibleTodo :boolean =false;
private todos :ITodos[] =[];

setTodos( newTask :string  ){
  this.todos.push({text :newTask})
  localStorage.setItem('todoList' ,JSON.stringify(this.todos))
}

getTodos(){

  return localStorage.getItem(JSON.parse(localStorage['todoList']));
}
  constructor() {}
}
