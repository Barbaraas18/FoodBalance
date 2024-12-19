import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMacronutrientiComponent } from './grafico-macronutrienti.component';

describe('GraficoMacronutrientiComponent', () => {
  let component: GraficoMacronutrientiComponent;
  let fixture: ComponentFixture<GraficoMacronutrientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoMacronutrientiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoMacronutrientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
