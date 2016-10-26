import { Injectable } from '@angular/core';
import { TodoAssignee } from './zippy/TodoAssignee';
const todosAssignee: TodoAssignee[] = [
    {
      name: 'Fabrice GINAPE',
      role: 'Administrator',
      assigned: true
    },
    {
      name: 'Fabrice  Michel GINAPE',
      role: 'Administrator',
      assigned: true
    },
    {
      name: 'Fabrice Michel GINAPE',
      role: 'Administrator',
      assigned: true
    }
  ];
@Injectable()
export class TodoAssigneesService {
  constructor() { }
   getTodoAssignees(): TodoAssignee[] {
    
    return todosAssignee;

  }
}

