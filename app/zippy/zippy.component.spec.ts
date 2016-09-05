/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { TodoAssigneesService } from '../todo-assignees.service';
import {
  inject, TestBed 
} from '@angular/core/testing'

import { ZippyComponent } from './zippy.component';

describe('Component: Zippy', () => {
  it('should create an instance', () => {
    let component = new ZippyComponent( new TodoAssigneesService());
    expect(component).toBeTruthy();
  });
});
