import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { TodosServiceService} from '../todos-service.service';
import { AddTaskForm} from '../add-task/add-task-form';



@Component({
  moduleId: module.id,
  selector: 'app-new-todo',
  templateUrl: 'new-todo.component.html',
  styleUrls: ['new-todo.component.css'],
  providers: [TodosServiceService]

})
export class NewTodoComponent implements OnInit {
  myForm:FormGroup; 
  // TODO  find a ways to initialise the FormBuilder
 //  constructor(private formBuilder:FormBuilder) {}
  constructor() {
     this.myForm =  new FormGroup({}); 
  }

  ngOnInit() {
    //  this.myForm = 
         this.myForm =  new FormGroup({}); 
     
  }

}
