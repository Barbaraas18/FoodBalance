import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommarioProfiloComponent } from './sommario-profilo.component';

describe('SommarioProfiloComponent', () => {
  let component: SommarioProfiloComponent;
  let fixture: ComponentFixture<SommarioProfiloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SommarioProfiloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SommarioProfiloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
