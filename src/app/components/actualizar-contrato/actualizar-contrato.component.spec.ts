import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarContratoComponent } from './actualizar-contrato.component';

describe('ActualizarContratoComponent', () => {
  let component: ActualizarContratoComponent;
  let fixture: ComponentFixture<ActualizarContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActualizarContratoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActualizarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
