import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';

import { State } from './counter.interfaces';
import * as  CounterActions from './counter.actions';

@Injectable()
export class AppEffects {
  constructor(private actions: Actions) {}
}
