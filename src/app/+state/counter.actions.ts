import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] INCREMENT';
export const DECREMENT = '[Counter] DECREMENT';
export const RESET = '[Counter] RESET';

export class Increase implements Action {
  readonly type = INCREMENT;
}

export class Decrease implements Action {
  readonly type = DECREMENT;
}

export class Reset implements Action {
  readonly type = RESET;
}

export type Actions = Increase | Decrease | Reset;
