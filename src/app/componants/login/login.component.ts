import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/app/services/todos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loggedIn :boolean =true;
  emailVal :string =''
  constructor(private todoService :TodosService) { }
  ngOnInit(): void {
  }

  errorMessege :string ='';
  isVisibleTodo = this.todoService.isVisibleTodo;
  login(email:any , pass:any){
    let data :any= localStorage.getItem('Users');
    let usersdata = JSON.parse(data);

    for(let user of usersdata){
      if(user.email === email.value && user.pass === pass.value ){
        this.isVisibleTodo = true;
        email.value ='';
        pass.value ='';

        return;
      }else{
        this.errorMessege = 'Email address or password is wrong';
      }
    }
  }

}
