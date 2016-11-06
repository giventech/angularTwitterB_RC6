import { Injectable } from '@angular/core';
import {Todo} from './todo';
import {Http, RequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import 'rxjs/Rx';
import {Observable} from  'rxjs/Rx';
 

const todos:Todo[] = [
    { id: "1",
    completed:false,
    title:"This is a title"},
    { id: "2",
      completed:false,
    title:"This is a title 2"},
    { id: "3",
      completed:true,
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
 /**
  * Call the http service getTodos which return an Observable<Todo[]> 
  * The data (Todo[]) of this Observable fetch via subsribe  
  */
//  getTodo(id: number): Todo {
//    var aTodo: Todo; 
//    // return this.getTodos().filter((todo => id).subscribe
//      this.getTodos().
//      subscribe(todos=>{
       
//        if (todos[id] != null) {
//          aTodo = todos[id];}
//        }
//      );
//     return aTodo;
//  }


 // When the value is returned as an Observable ten it will be availble in an asynchronous manner
 // Returning the value as a simple Todo would infer the chance of it beeing null 
 // In an asynchronous model
 getTodo(id: number): Todo {
   var aTodo: Todo;
   var aString: string;
   var aTodoObservable: Observable <Todo>;
   // return t
   
    this.getTodos().
        subscribe((data)=>      { 
          aTodo = data.find(value=> +value.id == id);
          console.log("a Todo Title"+aTodo.title);
          console.log("a Todo ID  "+aTodo.id);
         return aTodo;
      })
   return aTodo;

  }
       // Iterating over the Todo[]
       // The +converts a string in a number
      //  data.filter((todoItem,index,array) =>+todoItem.id == id)
      //  .
       
        //  aTodo = data.find(todoItem=> 
        //  +todoItem.id == id);
 
       
      //  todos.(element => {
      //   if (element != null && +element.id == id) {
      //     console.log("Title"+element.title)
      //     console.log("ID  "+element.id)
      //     aTodoObservable. aTodo = element;
      //     aString = element.title;
          
      //     console.log("a Todo Title"+aTodo.title)
      //     console.log("a Todo ID  "+aTodo.id)
      //      console.log("a String  "+aString)

      // }
      // });
   
   // console.log("Lenght of array"+ aTodos.length)

    //  subscribe(todos=>
    //  {  
    //    // Iterating over the Todo[]
    //    // The +converts a string in a number
    //    todos.forEach(element => {
    //     if (element != null && +element.id == id) {
    //       console.log("Title"+element.title)
    //       console.log("ID  "+element.id)
    //       aTodoObservable. aTodo = element;
    //       aString = element.title;
          
    //       console.log("a Todo Title"+aTodo.title)
    //       console.log("a Todo ID  "+aTodo.id)
    //        console.log("a String  "+aString)

    //   }
    //   });
    // })
  





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
  
  
}
  
  


