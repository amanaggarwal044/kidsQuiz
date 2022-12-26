import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtaDefaultComponent } from './cta-default.component';

describe('CtaDefaultComponent', () => {
  let component: CtaDefaultComponent;
  let fixture: ComponentFixture<CtaDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtaDefaultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtaDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
