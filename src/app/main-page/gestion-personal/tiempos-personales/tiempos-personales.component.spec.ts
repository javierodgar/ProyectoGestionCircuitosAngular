import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiemposPersonalesComponent } from './tiempos-personales.component';

describe('TiemposPersonalesComponent', () => {
  let component: TiemposPersonalesComponent;
  let fixture: ComponentFixture<TiemposPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TiemposPersonalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiemposPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
