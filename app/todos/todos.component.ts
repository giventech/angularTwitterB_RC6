import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
import {Todo} from '../todo';
import {ShoutPipe} from  '../shout.pipe';
import {Observable} from  'rxjs/Rx';
import {NewTodoComponent} from  '../new-todo';
import {ZippyComponent} from  '../zippy';
import {Router} from  '@angular/Router';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],

})
export class TodosComponent implements OnInit {
    // For dependency injection
    // TodServiceService and Router do not need to be intanciated
    // They already are instanciated Angular 2.0 dependencies injection Mechanism
    // They are first declared in the the Node Module 
    todos$:Observable<Todo[]>;
    constructor(
      private router: Router,  
      private todoService:TodosServiceService) {
      
   }
   
 
  // Insert initialisation code here
  // ngOnInit() {
  //   this.todos = this.todoService.getTodos();
  // }
   //Remote call to API 
   ngOnInit() {
      const ajaxResponse$ = this.todoService.getTodos();
      const delayedValues$ = ajaxResponse$.delay(2000);
      this.todos$ = delayedValues$;
  }

   onSelect(todo: Todo) {
    this.router.navigate(['/tododetails', todo.id]);
  }

}
