import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rejester',
  templateUrl: './rejester.component.html',
  styleUrls: ['./rejester.component.css']
})
export class RejesterComponent implements OnInit {
  users :string[] =[];

  validateData(){

  }
saveData(data :string){
    this.users.push(data);
    console.log(data);
    console.log(this.users);

}
  constructor() { }

  ngOnInit(): void {
}
}
