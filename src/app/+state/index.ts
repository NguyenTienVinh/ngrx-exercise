import { ActionReducerMap, createSelector } from '@ngrx/store';

import { State as CounterState } from './counter.interfaces';
import { State as TotoState  } from './todo.interfaces';
import * as fromCounter from './counter.reducer';
import * as fromTodo from './todo.reducer';

export interface State {
  counter: CounterState;
  todo: TotoState;
}

export const reducers: ActionReducerMap<State> = {
  counter: fromCounter.reducer,
  todo: fromTodo.reducer,
};


export const getCounterState = fromCounter.getState('counter');
export const getCounterValue = createSelector( getCounterState, fromCounter.getCounter);

export const getTodoState = fromTodo.getState('todo');
export const todoSelectors = fromTodo.getSelectors(getTodoState);


