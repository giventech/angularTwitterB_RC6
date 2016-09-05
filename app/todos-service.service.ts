import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {Http, RequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import 'rxjs/Rx';
import {Observable} from  'rxjs/Rx';


const todos:Todo[] = [
  {completed:false,
    title:"This is a title"},
    {completed:false,
    title:"This is a title 2"},
    {completed:true,
    title:"This is a title 3"}
  
]; 

//Dummy annotation from Angular to indicate Depencdency injection
@Injectable()
export class TodosServiceService {

//   constructor() {}
//   getTodos():Todo[] {
//     return todos;
//   }

  constructor(private http:Http) {}
   getTodos(): Observable<Todo[]> {
     var request = this.http
                       .get("public/api/todos.json")
                       .map(response => <Todo[]> response.json());
                       // We have `Todo` as an interface not a class so that we don't have
                       // to write ugly mapping code like:
                       //
                      //  .map(todos => todos.map(t => {
                      //      var mapped = new Todo();
                      //      mapped.title = t.title;
                      //      return mapped; 
                      //  } }) );
     return request;
   }

  
}

// @Injectable()
// export class MockTodoService  extends TodosServiceService {

//   constructor() {
//     super();
//   }

// @Injectable()
// export class MockTodoService  extends TodosServiceService {

//   constructor(backend:MockBackend) {
//     super(new Http(backend, new RequestOptions()));
//   }
  
  
//}
  
  


