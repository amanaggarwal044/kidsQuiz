import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseYamlComponent } from './parse-yaml.component';

describe('ParseYamlComponent', () => {
  let component: ParseYamlComponent;
  let fixture: ComponentFixture<ParseYamlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParseYamlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParseYamlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
