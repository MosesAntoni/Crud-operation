import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

getTodos(){
  return this.http.get(`https://jsonplaceholder.typicode.com/todos`);
}


getTodoData(todoId:number= 1){
return this.http.get(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
}



putTodoData(data:any){
  return this.http.put(`https://jsonplaceholder.typicode.com/todos/${data.id}`,data);
}


postTodoData(data: any){
  return this.http.post('https://jsonplaceholder.typicode.com/todos',data);
  }

  deleteTodoData(todoId:any){
    return this.http.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    }
}
