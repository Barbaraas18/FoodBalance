import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreapersonaleComponent } from './areapersonale.component';

describe('AreapersonaleComponent', () => {
  let component: AreapersonaleComponent;
  let fixture: ComponentFixture<AreapersonaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AreapersonaleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreapersonaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
