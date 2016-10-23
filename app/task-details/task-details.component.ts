import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Todo }   from '../Todo';

@Component({
  moduleId: module.id,
  selector: 'app-task-details',
  templateUrl: 'task-details.component.html',
  styleUrls: ['task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  
  @Input() todo: Todo;
  constructor(private taskDetailService:TaskDetailsService,
            private route: ActivatedRoute,
            private location: Location  
     ) { }

  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.taskDetailService.getTodo(id)
      .then(todo => this.todo = todo);
  });
}


}
