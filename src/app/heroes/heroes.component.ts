import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { LoadHeroes, AddHero, DeleteHero } from '../actions/heroes.action';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  isLoading$: Observable<boolean>;

  isAddingHero$: Observable<boolean>;
  hasAddHeroError$: Observable<string>;

  deletingHero$: Observable<any>;
  hasDeleteHeroError$: Observable<string>;


  constructor(
    private heroService: HeroService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    this.getHeroes();
    this.addHero();
    this.deleteHero();
  }

  getHeroes(): void {
    this.isLoading$ = this.store.select('heroes').pipe(map(state => state.isLoading));
    this.heroes$ = this.store.select('heroes').pipe(map(state => state.heroes));
    this.store.dispatch(new LoadHeroes());
  }

  addHero(): void {
    this.isAddingHero$ = this.store.select('heroes').pipe(map(state => state.isAddingHero));
    this.hasAddHeroError$ = this.store.select('heroes').pipe(map(state => state.hasAddHeroError));
  }

  deleteHero(): void {
    this.deletingHero$ = this.store.select('heroes').pipe(map(state => state.deletingHero));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.store.dispatch(new AddHero(name));
  }

  delete(hero: Hero): void {
    this.store.dispatch(new DeleteHero(hero));
  }
}
