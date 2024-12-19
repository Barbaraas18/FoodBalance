import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAggiornaDatiAccountComponent } from './form-aggiorna-dati-account.component';

describe('FormAggiornaDatiAccountComponent', () => {
  let component: FormAggiornaDatiAccountComponent;
  let fixture: ComponentFixture<FormAggiornaDatiAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAggiornaDatiAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAggiornaDatiAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
