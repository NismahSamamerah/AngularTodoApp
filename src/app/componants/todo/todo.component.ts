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

  addNew :boolean =true;
  searchVal :string='';
  TodoContent :string ='';


  inProgressStatus :boolean =false;
  searchMode :boolean = false;

  addItem(newTask :string ){
  if(this.addNew){
    if(newTask.length){
      this.todos.push(newTask);
    localStorage.setItem('todo' ,JSON.stringify(this.todos));
    this.inputVal ='';
    }else{
      alert('please Fill the input')
    }
  }
}

  removeItem(item :any){
    item.remove();
  }

  updateItem(item :any){
    console.log(item.innerHTML);
    this.inputVal = item.innerHTML;
    this.addNew = false;
  }
  move(){
    this.inProgressStatus =true;

  }
  search(){
    console.log(this.searchVal);
    for(let todo of this.todos){
      if(this.searchVal === todo){
        this.searchMode = true;
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// import { Component, OnInit } from '@angular/core';
// import { ITodos } from 'src/app/interfaces/todosInterface';
// import { TodosService } from 'src/app/services/todos.service';

// @Component({
//   selector: 'app-todo',
//   templateUrl: './todo.component.html',
//   styleUrls: ['./todo.component.css']
// })
// export class TodoComponent implements OnInit {

//   constructor(private todoService :TodosService) { }

//   todos :ITodos[]=[];
//   ngOnInit(): void {
//     this.getTodos();
//   }
//   // const randomId = Math.floor(Math.random() * (100000 - 1 + 1) + 1);

//   setTodos(newTask :string )  {
//     if(newTask.length){
//       this.todoService.setTodos(newTask);
//     }else{
//       alert('please add text')
//     }
//   }

//   getTodos() {
//     this.todos = this.todoService.getTodos();
//     this.inputVal =''

//   }
//   inputVal :string =''
//   isValidData :boolean =false;


//   addNew :boolean =true;
//   searchVal :string='';
//   TodoContent :string ='';

// //   addItem(newTask :string ){
// //   if(this.addNew){
// //     if(newTask.length){
// //       this.todos.push(newTask);
// //     localStorage.setItem('todo' ,JSON.stringify(this.todos));
// //     this.inputVal =''
// //     }else{
// //       alert('please Fill the input')
// //     }
// //   }
// // }

//   removeItem(item :any){
//     item.remove();

//     console.log(item);

//   }

//   updateItem(item :any){
//     console.log(item.innerHTML);
//     this.inputVal = item.innerHTML;
//     this.addNew = false;
//   }
//   move( ){

//   }
//   search(){

//   }



// }
