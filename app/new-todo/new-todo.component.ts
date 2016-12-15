import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators,FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { TodosServiceService} from '../todos-service.service';
import { AddTaskForm} from '../add-task/add-task-form.component';



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
         // This constructs a FormGroup which FormControl Elements can
         this.myForm = new FormGroup({
           todoTitle:     new  FormControl(),
           todoName :     new  FormControl(),
           todoSurname :  new  FormControl()
         }); 
  }

  onSubmit(form:any){
     console.log("Title: "+form.todoTitle);
     console.log("Name: "+form.todoName);
     console.log("Name: "+form.todoSurname);
      console.log("Forms ",form);
  }

   onSubmitFormValue(form:any){
     console.log("Title: ",form);
  }

  onInputEvent (){
     console.log("Input ");
     
  }
}
