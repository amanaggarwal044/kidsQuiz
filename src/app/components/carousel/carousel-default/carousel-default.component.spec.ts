import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDefaultComponent } from './carousel-default.component';

describe('CarouselDefaultComponent', () => {
  let component: CarouselDefaultComponent;
  let fixture: ComponentFixture<CarouselDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
