import { Action } from '@ngrx/store';
import { SpawnSyncOptionsWithStringEncoding } from 'child_process';

export enum HeroActionType {
  LoadHeroes = '[Hero] LoadHeroes',
  LoadSuccess = '[Hero] LoadSuccess',
  LoadError = '[Hero] LoadError',

  AddHero = '[Hero] AddHero',
  AddHeroSuccess = '[Hero] AddHeroSuccess',
  AddHeroError = '[Hero] AddHeroError',

  DeleteHero = '[Hero] DeleteHero',
  DeleteHeroSuccess = '[Hero] DeleteHeroSuccess',
  DeleteHeroError = '[Hero] DeleteHeroError',
}

export class LoadHeroes implements Action {
  readonly type = HeroActionType.LoadHeroes;

  constructor() {}
}

export class LoadSuccess implements Action {
  readonly type = HeroActionType.LoadSuccess;
  
  constructor(public payload: any) {}
}

export class LoadError implements Action {
  readonly type = HeroActionType.LoadError;
    
  constructor(public payload: any) {}
}

export class AddHero implements Action {
  readonly type = HeroActionType.AddHero;

  constructor(public payload: any) {}
}

export class AddHeroSuccess implements Action {
  readonly type = HeroActionType.AddHeroSuccess;

  constructor(public payload: any) {}
}

export class AddHeroError implements Action {
  readonly type = HeroActionType.AddHeroError;
  
  constructor(public payload: any) {}
}

export class DeleteHero implements Action {
  readonly type = HeroActionType.DeleteHero;
  
  constructor(public payload: any) {}
}

export class DeleteHeroSuccess implements Action {
  readonly type = HeroActionType.DeleteHeroSuccess;
  
  constructor() {}
}

export class DeleteHeroError implements Action {
  readonly type = HeroActionType.DeleteHeroError;

  constructor(public payload: any) {}
}

export type HeroActionsUnion =
  | LoadHeroes
  | LoadSuccess
  | LoadError
  | AddHero
  | AddHeroSuccess
  | AddHeroError
  | DeleteHero
  | DeleteHeroSuccess
  | DeleteHeroError;
