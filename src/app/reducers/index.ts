import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';

import { noteReducer } from './counter.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  notes: noteReducer, 

};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
