import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Todo }   from '../Todo';
import { TodosServiceService} from '../todos-service.service';


@Component({
  moduleId: module.id,
  selector: 'app-task-details',
  templateUrl: 'task-details.component.html',
  styleUrls: ['task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  
  // This is the input parameter of a component
  
  @Input() todo: Todo;
  constructor(private todoService:TodosServiceService,
              private route: ActivatedRoute,
              private location: Location  
     ) { }

  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
     this.todo =this.todoService.getTodo(id);
      // .then(todo => this.todo = todo);
  });
}

}
