import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HeroDetailComponent } from './hero-detail.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { HeroService } from '../hero.service';
import { HttpClientModule } from '@angular/common/http';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        AppRoutingModule,
        HttpClientModule
      ],
      declarations: [
        DashboardComponent,
        HeroesComponent,
        HeroDetailComponent
      ],
      providers: [
        HeroService,
        {provide: APP_BASE_HREF, useValue: '/my/app'}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
