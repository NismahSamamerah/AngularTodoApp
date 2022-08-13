import { Component, OnInit } from '@angular/core';
import { last } from 'rxjs';
import { Validator1 } from '../Validator';
@Component({
  selector: 'app-rejester',
  templateUrl: './rejester.component.html',
  styleUrls: ['./rejester.component.css']
})
export class RejesterComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {
}
  // loggedIn :boolean =false;
  FirstNameError :string='';
  LastNameError :string ='';
  AgeError :string = '';
  GenderError :string ='';
  EmailError :string ='';
  PasswordError : string ='';
  PasswordConfirmError :string ='';

  newUser ={
      firstName :'',
      lastName :'',
      age : 0,
      gender :'',
      email :'',
      pass :'',
      cPass :''
  }


users :any;
addUser(Fname:any , Lname:any , gender :any, age :any,email :any ,password :any , confirmPassword :any ){
  if(localStorage['Users'] !=null){
    this.users = JSON.parse(localStorage['Users'])
  }else{
    this.users = [];
  }

  if(!Validator1.isValidName(Fname.value)){
    this.FirstNameError ='invalid first name'
    return ;
  }else if(!Validator1.isValidName(Lname.value)){
    this.LastNameError ='invalid last name'
    return ;

  }else if(!Validator1.isValidGenger(gender.value)){
    this.GenderError ='Fill the gender input';
    return ;
  }
  else if(!Validator1.isValidAge(age.value)){
    this.AgeError ='invalid age';
    return ;
  }
  else if(!Validator1.isValidEmail(email.value)){
    this.EmailError ='invalid email adress'
    return ;
  }else if(!Validator1.isValidPassword(password.value)){
    this.PasswordError ='invalid password';
    return ;
  }else if(!Validator1.isValidConfirmPassword(confirmPassword.value , password.value)){
    this.PasswordConfirmError = 'confirm Password does not match with password';
    return ;
  }
  this.newUser ={
    firstName :Fname.value,
    lastName :Lname.value,
    age : age.value,
    gender :gender.value,
    email :email.value,
    pass :password.value,
    cPass :confirmPassword.value
}
  this.users.push(this.newUser);
    localStorage.setItem('Users' , JSON.stringify(this.users));
    console.log(this.users);

    Fname.value = '';
    Lname.value ='';
    age.value = '';
    gender.value = '';
    email.value = '';
    password.value ='';
    confirmPassword.value = '';
    return true;
}
}
