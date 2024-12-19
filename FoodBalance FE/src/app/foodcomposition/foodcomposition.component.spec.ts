import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodcompositionComponent } from './foodcomposition.component';

describe('FoodcompositionComponent', () => {
  let component: FoodcompositionComponent;
  let fixture: ComponentFixture<FoodcompositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FoodcompositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodcompositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
