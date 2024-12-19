import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAggiornaDatiComponent } from './form-aggiorna-dati.component';

describe('FormAggiornaDatiComponent', () => {
  let component: FormAggiornaDatiComponent;
  let fixture: ComponentFixture<FormAggiornaDatiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAggiornaDatiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAggiornaDatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
