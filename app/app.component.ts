import { Component } from '@angular/core';
import { TodosServiceService} from './todos-service.service';

@Component({
selector: 'my-app',
template: `<div class="container" >
<h1>

  My todo list:
  
</h1>

<ul class="nav nav-tabs nav-justified">
     <li> <a  routerLink="/assignee">Assignees</a></li>
     <li> <a  routerLink="/todo">Todo</a></li>
</ul>
   <app-new-todo>
  </app-new-todo>
<!-- Routed views go here -->
<router-outlet>
  </router-outlet>

</div>`,
    providers: [TodosServiceService]
})
export class AppComponent {
     newTitle = 'app works!';
    doSomething() {
    var title =  'test';
    this.newTitle =  'new value';

  }
 }
