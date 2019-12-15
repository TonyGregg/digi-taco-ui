import { TestBed } from '@angular/core/testing';

import { TacoService } from './taco.service';

describe('TacoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TacoService = TestBed.get(TacoService);
    expect(service).toBeTruthy();
  });
});
