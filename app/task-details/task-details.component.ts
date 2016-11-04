import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, Params }   from '@angular/router';
import { Todo }   from '../Todo';
import { TodosServiceService} from '../todos-service.service';
import { Location }           from '@angular/common';


@Component({
  moduleId: module.id,
  selector: 'app-task-details',
  templateUrl: 'task-details.component.html',
  styleUrls: ['task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  
  // Todo is parameter that the componen expect
  // ActivatedRoute provide access to request parameters
  @Input() todo: Todo;
  constructor(private todoService:TodosServiceService,
              private route: ActivatedRoute,
              private location: Location  
     ) { }
  //Navigate back
  goBack(): void {
    this.location.back(); 
  }
  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
     this.todo =this.todoService.getTodo(id);
     console.log("Todo name "+this.todo.id);
     console.log("Todo id "+this.todo.id);
     // .then(todo => this.todo = todo);
  });
}

}
