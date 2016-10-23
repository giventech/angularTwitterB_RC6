import { Component, OnInit } from '@angular/core';
import { TodosServiceService } from '../todos-service.service';
import {Todo} from '../todo';
import {ShoutPipe} from  '../shout.pipe';
import {Observable} from  'rxjs/Rx';
import {NewTodoComponent} from  '../new-todo';
import {ZippyComponent} from  '../zippy';

@Component({
  moduleId: module.id,
  selector: 'app-todos',
  templateUrl: 'todos.component.html',
  styleUrls: ['todos.component.css'],



})
export class TodosComponent implements OnInit {
    // For dependency injection
    todos$:Observable<Todo[]>;
    constructor(private todoService:TodosServiceService) {
      
    }
   
 
  // Insert initialisation code here
  // ngOnInit() {

  //   this.todos = this.todoService.getTodos();
  // }

   ngOnInit() {
      const ajaxResponse$ = this.todoService.getTodos();
      const delayedValues$ = ajaxResponse$.delay(2000);
      this.todos$ = delayedValues$;
  }

}
