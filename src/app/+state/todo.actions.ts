import { Action } from '@ngrx/store';
import { Todo } from './todo.interfaces';

export const LOAD = '[Todos] Load';
export const LOADED = '[Todos] Loaded';

export const CREATE = '[Todos] Create';

export const UPDATE = '[Todos] Update';

export const DELETE = '[Todos] Delete';

export class LoadTodos {
  readonly type = LOAD;
}

export class Loaded implements Action {
  readonly type = LOADED;
  constructor(public todos: Todo[]) { }
}

export class Create implements Action {
  readonly type = CREATE;
  constructor(public todo: Todo) {}
}

export class Update implements Action {
  readonly type = UPDATE;
  constructor(public id: string, public changes: Partial<Todo>) {}
}

export class Delete implements Action {
  readonly type = DELETE;
  constructor(public id: string) {}
}

export type TodoActions = LoadTodos | Loaded | Create | Update | Delete;
