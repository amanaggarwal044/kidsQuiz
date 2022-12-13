import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDefaultComponent } from './hero-default.component';

describe('HeroDefaultComponent', () => {
  let component: HeroDefaultComponent;
  let fixture: ComponentFixture<HeroDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
