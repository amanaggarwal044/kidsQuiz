import { TestBed } from '@angular/core/testing';

import { ParseYamlService } from './parse-yaml.service';

describe('ParseYamlService', () => {
  let service: ParseYamlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParseYamlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
