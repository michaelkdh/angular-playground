import { ActionReducerMap } from '@ngrx/store';

import * as fromHeroes from './heroes.reducer';

export interface State {
  heroes: any;
}

export const reducers: ActionReducerMap<State> = {
  heroes: fromHeroes.reducer
};