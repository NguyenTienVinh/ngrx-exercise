import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { State } from './todo.interfaces';
import * as todoActions from './todo.actions';


@Injectable()
export class TodoEffects {
  // implement LoadTodos efect
  // Refer https://github.com/ngrx/platform/blob/master/docs/effects/README.md#example
  @Effect({ dispatch: false }) loadTodo = this.actions.ofType(todoActions.LOAD).map((action: todoActions.LoadTodos) => {
    console.log(action);
  });

  @Effect({ dispatch: false }) saveTodo = this.actions.ofType(todoActions.CREATE).do((action: todoActions.Create) => {
      console.log(action);
      window.localStorage.setItem(action.todo.id, JSON.stringify(action.todo));
  });

  @Effect({ dispatch: false }) deleteTodo = this.actions.ofType(todoActions.DELETE).do((action: todoActions.Delete) => {
      console.log(action);
      window.localStorage.removeItem(action.id);
  });

  // implement update effect

  constructor(private actions: Actions) {}
}
