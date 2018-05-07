import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import { HeroService } from '../hero.service';
import {
  HeroActionType,
  LoadHeroes,
  LoadSuccess,
  LoadError,

  AddHero,
  AddHeroSuccess,
  AddHeroError,

  DeleteHero,
  DeleteHeroSuccess,
  DeleteHeroError
} from '../actions/heroes.action';
import { Hero } from '../hero';

@Injectable()
export class HeroesEffects {
  constructor(private actons$: Actions, private heroService: HeroService) {}

  @Effect()
  getHeroes$: Observable<Action> = this.actons$
    .ofType<LoadHeroes>(HeroActionType.LoadHeroes)
    .pipe(
      switchMap(
        () => this.heroService.getHeroes()
        .pipe(
          map(heroes => new LoadSuccess(heroes)),
          catchError(err => of(new LoadError(err)))
        )
      )
    );

  @Effect()
  addHero$: Observable<Action> = this.actons$
    .ofType<AddHero>(HeroActionType.AddHero)
    .pipe(
      map(action => action.payload),
      switchMap(
        (name: string) => this.heroService.addHero({ name } as Hero)
        .pipe(
          map(hero => new AddHeroSuccess(hero)),
          catchError(err => of(new AddHeroError(err)))
        )
      )
    );

  @Effect()
  deleteHero$: Observable<Action> = this.actons$
    .ofType<DeleteHero>(HeroActionType.DeleteHero)
    .pipe(
      map(action => action.payload),
      switchMap(
        (hero) => this.heroService.deleteHero(hero)
        .pipe(
          map(hero => new DeleteHeroSuccess()),
          catchError(err => of(new DeleteHeroError(err)))
        )
      )
    );
}
