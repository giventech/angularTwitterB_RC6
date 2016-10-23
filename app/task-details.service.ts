import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
@Injectable()
export class TaskDetailsService {
  getHeroes(): Promise<Todo[]> {
    return Promise.resolve(HEROES);
  }
}