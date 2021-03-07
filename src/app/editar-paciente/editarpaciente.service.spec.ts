import { TestBed } from '@angular/core/testing';

import { EditarpacienteService } from './editarpaciente.service';

describe('EditarpacienteService', () => {
  let service: EditarpacienteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditarpacienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
