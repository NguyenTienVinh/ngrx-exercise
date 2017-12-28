import { createFeatureSelector } from '@ngrx/store';

import { State } from './counter.interfaces';
import * as  counterActions from './counter.actions';

const appInitialState: State = {
  counter: 0
};

export function reducer(state: State = appInitialState, action: counterActions.Actions): State {
  switch (action.type) {
    case counterActions.INCREMENT:
      // state.counter = state.counter + 1;
      // return state;
      return { counter: state.counter + 1};

    case counterActions.DECREMENT:
      return { counter: state.counter - 1};

    case counterActions.RESET:
      return appInitialState;

    default:
      return state;
  }
}

export const getState = (selector: string) => createFeatureSelector<State>(selector);
export const getCounter = (state: State) => state.counter;



