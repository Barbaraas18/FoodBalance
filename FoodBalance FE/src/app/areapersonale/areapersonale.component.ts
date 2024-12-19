import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../servizi/utente.service';

@Component({
    selector: 'app-areapersonale',
    templateUrl: './areapersonale.component.html',
    styleUrl: './areapersonale.component.css',
    standalone: false
})
export class AreapersonaleComponent implements OnInit {
  utente: any=null;
  warning="";


  constructor(private utenteService: UtenteService){}

  ngOnInit(): void {
    let user_id=this.utenteService.getToken();
    this.utenteService.getUtente(user_id).subscribe({
      next:(data:any)=>{
        this.utente=data;
      },
        error:(errore:any)=>{
            this.warning = "Il server non è disponibile. Riprova più tardi.";
        }
      })
    }


    onUtenteAggiornato(utenteAggiornato:any){
      this.utente=utenteAggiornato;
    }

  }
