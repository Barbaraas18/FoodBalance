import { Component, OnInit } from '@angular/core';
import { servicePasto } from '../servizi/servicePasto';
import { UtenteService } from '../servizi/utente.service';

@Component({
  selector: 'app-riepilogo',
  templateUrl: './riepilogo.component.html',
  styleUrl: './riepilogo.component.css'
})
export class RiepilogoComponent implements OnInit{
  giornoCalorie:any;
  calorie_da_assumere:any;
  giornoMacronutrienti:any;
  grafico=true;
  warning="";

  constructor(private servicepasto: servicePasto, private utenteService: UtenteService){

  }

ngOnInit(): void {
  let user_id=this.utenteService.getToken();
  this.servicepasto.listaCalorieGiornaliere(user_id).subscribe({
    next:(data:any)=>{
      this.giornoCalorie=data;
    },
    error:(errore:any)=>{
      this.warning="Errore del server: riprova più tardi!";
    }
  });
  this.servicepasto.listaMacronutrientiGiornalieri(user_id).subscribe({
    next:(data:any)=>{
      this.giornoMacronutrienti=data;
    },
    error:(errore:any)=>{
      this.warning="Errore del server: riprova più tardi!";
    }
  });
  this.utenteService.getUtente(user_id).subscribe({
    next:(data:any)=>{
      this.calorie_da_assumere=data.calorie;
    },
    error:(errore:any)=>{
      this.warning="Errore del server: riprova più tardi!";
    }
  })
}

funzioneToggle() : void{
  this.grafico = !this.grafico
   
}


}

