import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UtenteService } from '../../servizi/utente.service';


@Component({
    selector: 'app-form-aggiorna-dati',
    templateUrl: './form-aggiorna-dati.component.html',
    styleUrl: './form-aggiorna-dati.component.css',
    standalone: false
})
export class FormAggiornaDatiComponent implements OnChanges {
  @Input() utente:any;
  @Output() inviaUtenteAggiornato= new EventEmitter();
  formDati!:FormGroup;
  warning="";
  constructor(private UtenteService:UtenteService) {
    this.formDati= new FormGroup({
    eta: new FormControl(null),
    sesso: new FormControl(null),
    altezza: new FormControl(null),
    peso: new FormControl(null),
    attivita: new FormControl(null)
  });
  }

  ngOnChanges(changes: SimpleChanges): void {
    let form_sesso:String="Uomo";
    if (changes['utente']){
      if(this.utente?.sesso=='F'){
        form_sesso="Donna";
      }
      this.formDati.patchValue({
        eta: this.utente?.eta,
        sesso: form_sesso,
        altezza: this.utente?.altezza,
        peso: this.utente?.peso,
        attivita: this.utente?.attivita
      })
    }
  }

  Onclick(){
    delete this.formDati.value.sesso;
    const dati= this.formDati.value;
    dati.user_id=this.utente.user_id;
    
    this.UtenteService.updateUtenteDati(dati).subscribe({
      next:(data:any)=>{
        this.utente=data;
        this.inviaUtenteAggiornato.emit(this.utente);
        this.formDati.markAsPristine();
        this.warning="";
 
      },
      error:(errore:any)=>{
          this.warning = "Errore del server: riprova più tardi!";
      },

    })
  }
  

}
