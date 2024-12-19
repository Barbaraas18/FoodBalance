import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoCalorieComponent } from './grafico-calorie.component';

describe('GraficoCalorieComponent', () => {
  let component: GraficoCalorieComponent;
  let fixture: ComponentFixture<GraficoCalorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoCalorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficoCalorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
