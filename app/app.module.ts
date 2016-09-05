import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule   } from '@angular/router';
import { FormsModule   } from '@angular/forms';
import { HttpModule   } from '@angular/http';

import { AppComponent }  from './app.component';
import { ZippyComponent } from './zippy/zippy.component';
import { NewTodoComponent } from './new-todo/new-todo.component';
import { TodosComponent } from './todos/todos.component';
import { ShoutPipe} from  './shout.pipe';
 
// export const TodoRoutes: Routes = [
   
//            { path:'assignee',  component: ZippyComponent },
//            { path:'todo',  component: TodosComponent },
//            { path:'',  component: NewTodoComponent }
    
   
// ];
@NgModule({
  imports: [ BrowserModule, // Router
    //RouterModule.forRoot(TodoRoutes), 
    // Forms
    HttpModule,
    FormsModule],
  declarations: [ AppComponent,ZippyComponent,NewTodoComponent,TodosComponent,ShoutPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
