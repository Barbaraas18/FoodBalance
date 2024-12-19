import { Component, EventEmitter, Input, OnChanges, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtenteService } from '../../servizi/utente.service';

@Component({
    selector: 'app-form-aggiorna-dati-account',
    templateUrl: './form-aggiorna-dati-account.component.html',
    styleUrl: './form-aggiorna-dati-account.component.css',
    standalone: false
})
export class FormAggiornaDatiAccountComponent implements OnChanges {
  hide: boolean=true;
  hide2:boolean=true;
  @Input() utente:any;
  @Output() inviaUtenteAggiornato= new EventEmitter(); 
  warning="";
  formDatiAccount!:FormGroup;
  constructor(private UtenteService: UtenteService) {
    this.formDatiAccount= new FormGroup({
      email: new FormControl(null),
      username: new FormControl(null),
      old_password_utente: new FormControl(null),
      password_utente:new FormControl(null)
    })
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['utente']){
      this.formDatiAccount.patchValue({
        email: this.utente?.email,
        username: this.utente?.username,
      })
  }
  }

  Onclick(){
    delete this.formDatiAccount.value.email;
    const dati= this.formDatiAccount.value;
    dati.user_id=this.utente.user_id;
    this.UtenteService.updateUtenteDatiAccount(dati).subscribe({
      next:(data:any)=>{
        
        this.utente=data;
        this.inviaUtenteAggiornato.emit(this.utente);
        this.formDatiAccount.markAsPristine();
        this.warning=""
      },
      error:(errore:any)=>{
        if(errore.error.text=="ERRORE: la vecchia password inserita non coincide"){
          this.warning="ERRORE: la vecchia password inserita non coincide";
        }
        else{
        this.warning = "Errore del server: riprova più tardi!";}
    },
    })
  }
}
