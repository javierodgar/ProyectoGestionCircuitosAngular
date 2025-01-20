import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTiempoComponent } from './agregar-tiempo.component';

describe('AgregarTiempoComponent', () => {
  let component: AgregarTiempoComponent;
  let fixture: ComponentFixture<AgregarTiempoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTiempoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTiempoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
