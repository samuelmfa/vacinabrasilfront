import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicacaoVacinaModelComponent } from './aplicacao-vacina-model.component';

describe('AplicacaoVacinaModelComponent', () => {
  let component: AplicacaoVacinaModelComponent;
  let fixture: ComponentFixture<AplicacaoVacinaModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicacaoVacinaModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicacaoVacinaModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
