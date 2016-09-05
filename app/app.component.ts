import { Component } from '@angular/core';
import { TodosServiceService} from './todos-service.service';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1> <app-zippy></app-zippy><app-todos></app-todos><app-new-todo></app-new-todo>',
    providers: [TodosServiceService]
})
export class AppComponent {
     newTitle = 'app works!';
    doSomething() {
    var title =  'test';
    this.newTitle =  'new value';

  }
 }
