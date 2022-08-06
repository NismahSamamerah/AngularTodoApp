import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  inputVal :string =''
isValidData :boolean =false;
todos :string[]=[];

addItem(newTask :string){
  if(newTask.length){
    this.todos.push(newTask);
    this.inputVal = '';
  }else{
    this.isValidData = true;
    alert('please add task')
  }

}
clearData(newTask :string) {
  newTask='';
}
removeItem(item :string){

  }
  constructor() { }

  ngOnInit(): void {
  }

}
