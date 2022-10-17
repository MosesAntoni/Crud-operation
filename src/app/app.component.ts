
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  todo: Object | undefined;
  
  
  
  constructor(private appService:AppService){
this.appService.getTodoData(2)
.subscribe(data=> this.todo = data);


this.appService.putTodoData({id:2,userId:2,title:'test'})
.subscribe(data=> console.log(data)
);


  }
  
  
  
  
  
  
//   todo: Object | undefined
//   constructor(private http:HttpClient){
// this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=> this.todo = x);
//   }
}
