import { TestBed } from '@angular/core/testing';

import { DatosCircuitosService } from './datos-circuitos.service';

describe('DatosCircuitosService', () => {
  let service: DatosCircuitosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatosCircuitosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
