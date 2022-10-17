import { Component, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

todos: Object | null | undefined

showAdd =false;
message:string=""
  todo:any;
  toto: null | undefined


  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

openTodo(){
  this.todoService.getTodoData(this.todo.id).subscribe(data => this.todo = data)
}

add(todo:any){
  this.showAdd = true;
  this.todo ={};
  this.message = "";
}

save(){
  const api = this.todo.id 
  ? this.todoService.putTodoData(this.todo)
   : this.todoService.postTodoData(this.todo);

  api.subscribe(x => {
    this.message = !this.todo.id
    ? "todo created successfully"
    : `todo ${this.todo.id} saved successfully`;
    this.todo = null;
    this.todos = null;
    this.showAdd = false;
  });
}

delete(){
  this.todoService
  .deleteTodoData(this.todo.id)
  .subscribe(x => {
    this.message = `todo ${this.todo.id} delete successfully`;
    this.toto = null;
    this.todos = null;
    this.showAdd = false
  });
}

getData(){
  this.message ="";
  this.todoService.getTodos().subscribe(data => (this.todos = data))
}

back(todo:any){
  this.todo = null;
  this.showAdd = false;
  this.todos = null;
}

}
