import { Component, OnInit } from '@angular/core';
import {TodoAssignee} from './TodoAssignee';
import {TodoAssigneesService} from '../todo-assignees.service';


@Component({
  moduleId: module.id,
  selector: 'app-zippy',
  templateUrl:'zippy.component.html',
  styleUrls: ['zippy.component.css'],
  providers: [TodoAssigneesService]
}) 
export class ZippyComponent implements OnInit {
  todoassignees: TodoAssignee [];
  
  constructor(private todoAssigneesService:TodoAssigneesService) {}

  ngOnInit() {
    this.todoassignees = this.todoAssigneesService.getTodoAssignees();
  }
 }
