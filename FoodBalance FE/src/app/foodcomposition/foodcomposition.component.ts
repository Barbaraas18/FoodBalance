import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

import { ciboDto } from '../Interfacce/ciboDto';

import { UtenteService } from '../servizi/utente.service';
import { CiboService } from '../servizi/cibo.service';
import { UtenteInterface as Utente } from '../Interfacce/utente.interface' 
import { servicePasto } from '../servizi/servicePasto';
import { CIBOEXTENDED } from '../Interfacce/CIBOEXTENDED';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
@Component({
  selector: 'app-foodcomposition',
  templateUrl: './foodcomposition.component.html',
  styleUrl: './foodcomposition.component.css'
})
export class FoodcompositionComponent /* implements AfterViewInit */{
  
  
  listaAlimenti  : any  = [] ; 
  user !: Utente ;
  ListaNomiCibi !: any ; 
  isDisabled !: boolean ;  
  DataCalendario  = new Date ; 

  myFilter = (d: Date | null ): boolean => {
    
    const day = (d || new Date()).getDate() ; 
    const month = (d || new Date()).getMonth() ; 
    const year = (d || new Date()).getFullYear() ;  

    //console.log(d)
    
    //console.log(month <= Number(this.prova.getMonth()) && year <= Number(this.prova.getFullYear()))
      if (month <= Number(this.DataCalendario.getMonth()) && year <= Number(this.DataCalendario.getFullYear()) ){

        if (month == this.DataCalendario.getMonth()){
          return day <= Number(this.DataCalendario.getDate()) ; 
        }else{
          return true 
        }

      } else{
        return false ; 
      }
      
  };
  
  prendiMese(){
    if (typeof(Number(this.DataCalendario.getMonth)) == "number") {
      
      if(Number(this.DataCalendario.getMonth) < 10){
        

        return ("0"+this.DataCalendario.getMonth()+1).toString() ;  

      }else{
        return (this.DataCalendario.getMonth()+1).toString() ; 
      }

    }else{
      alert('si è verificato un problema inaspettato')  ; 
      return "0"   ; 
    }
    


  }
  
  maxDate = this.prendiMese()+"/"+this.DataCalendario.getDate()+"/"+this.DataCalendario.getFullYear() ; 

  
  
  







  
  constructor(
    private serviceCibo : CiboService ,
    private servizioPasto : servicePasto , 
    private servizioUtente : UtenteService ,
  ){}


  
  

  
 
  
 
  ngOnInit(): void {
    this.definisciUtente()
  }
  recuperaPastiGiorniPassati(){

    var dateInputArg = document.getElementsByTagName("input")[2].value  ; 
    
    var dataScelta = this.conversioneDataCalendario(dateInputArg) ; 

    

    //la data entra come formato yyyy/mm/day
    // data scelt :: 2024-12-1 fixed 
    
    
    const limiteMassimo = this.conversioneDataCalendario(this.maxDate)
     
    
    
    if(this.verificaValiditaDataInput(dataScelta)){

      // i dati inseriti sono una data valida 
      if(this.condizioneVerificaCalendario(dataScelta, limiteMassimo) ){
        
        if (dateInputArg == this.maxDate || dateInputArg == " "){
          this.isDisabled = false ; 
        }else{
           this.isDisabled = true ; 
        }
        
        this.servizioPasto.getPastiGiornoPassato(this.user , dataScelta).subscribe({
  
          next:(data:any)=>{
             
    
            this.conversioneArrayInJson(data)  ;  
               //le prossime righe sono usabili per il testing sul aspetto per i pasti passati  */
                /* this.servizioPasto.getPastiOdierni(this.user).subscribe({
                  next:(data : any)=>{
                    this.conversioneArrayInJson(data) ; 
                  }
                })  */
    
          } ,
    
          error:(error: Error)=>{
            
            alert("si è verificato un errore nel server  ")
          } , 
    
    
          
        })
  
      }else{
        
        alert("la data inserita è oltre quella odierna") ; 
        document.getElementsByTagName("input")[2].value = "prova" ; 
        document.getElementsByTagName("input")[2].value = this.maxDate ; 
      }


    }else{

      alert("la data inserita non è valida") ; 
      document.getElementsByTagName("input")[2].value = "" ; 
      
    }

  }

  condizioneVerificaCalendario(dataScelta : string , dataLimite : string ) : boolean{
     
    var data = [dataScelta , dataLimite] ; 

    if(data.sort()[0] == dataScelta){
      return true 
    }else{
      return false
    } 





    
    
  


}
verificaValiditaDataInput(array1 : string) : boolean {
  var array=array1.split("-") ; 
  var boolean = true ; 
  
  for ( var i = 0 ; i < array.length ; i++){
    if (typeof(Number(array[i]))=="number" && Number(array[i]).toString() !== "NaN") {
      
      
      
      boolean = true && boolean ; 
    }else{
      boolean = false ; 

    }
  }
  return boolean  ; 
}

  


  definisciUtente(){

    var id = this.servizioUtente.getToken() ; 
    this.servizioUtente.getUtente(id).subscribe({
      
      next:(data : any)=>{

        this.user = data ; 
        this.PrendiDati();
      },error:()=>{
        alert("si è verificato un errore inaspettato ") ; 
      }





    })









    
  } 
  

  CercaAlimento( e: Event ){

    
      var InputArgument = (<HTMLInputElement>e.target).value.length ; 

     if (InputArgument >= 2) {
       this.serviceCibo.getListaNomiCibi((<HTMLInputElement>e.target).value).subscribe({
        next:(data : any)=>{
          this.ListaNomiCibi = data ; 
        }
       })
       
       
     }else{
      this.ListaNomiCibi=[] ; 
     }
  
  
  
  
  
  
  
    








  }
  

  
  SalvaAlimento(){

    var Alimento : ciboDto ; 
    
    const Input = document.getElementsByTagName("input") ; 
    var  nomeAlimento : String = Input[0].value ; 
    var  quantitaAlimento : String = Input[1].value; 
    if( typeof(Number(quantitaAlimento)) == "number" && Number(quantitaAlimento) > 0){
      
      var Alimento : ciboDto = {
      "nome" : nomeAlimento,
      "quantita": Number(quantitaAlimento),
      } 

      if (nomeAlimento == "" /* || quantitaAlimento ==  "" */){
        alert("Il nome inserito non è valido ")
      }else{

        this.serviceCibo.getCibo(Alimento).subscribe({

          next:(data : any)=>{
            data.quantita = Alimento.quantita ; 
            this.listaAlimenti.push(data)
  
  
            
          },
  
          error:(errore )=>{
            switch (errore.status){
              
              case 500 : alert("Cibo Non trovato nel db "); break 
              default : alert("errore inaspettato"); break 
  
  
            }
             
          }
          
  
        }) ; 

      }
      





    }else{
      alert("i dati inseriti non sono validi")  ;
      
      
      Input[1].value = "" ; 
    }

  }
  
  

  CancellaRiga(i: number){

    
    this.listaAlimenti .splice(i , 1)
  


  } 
  
  SalvaDati(){

    this.servizioPasto.savePasto(this.listaAlimenti , this.user)

  }
  PrendiDati() {
    
    var JsonSavedFood : Array<CIBOEXTENDED> =[] ; 
    
    this.servizioPasto.getPastiOdierni(this.user).subscribe({
      next:(data : any)=>{
          console.log("La get è andata  a buon fine ")   ; 
          
          
          for (var i = 0 ; i < data.length ; i++){

            

              JsonSavedFood[i]={

                "id": data[i][0] , 
                "quantita":data[i][2],
                "nome":data[i][3],
                "proteine":data[i][4],
                "grassi":data[i][5],
                "carboidrati":data[i][6],
                "calorie":data[i][7] , 

              }
           
          }

          this.listaAlimenti = JsonSavedFood ; 
  
          
      },error : (error : any)=>{
        
        alert("Si è verificato un problema ");
        
      }
    })
    

    
  }




  conversioneDataCalendario(date : string){

    var oldDateArray = date.split("/") ; 
    
    var mese = oldDateArray[0] ; 
    var giorno = oldDateArray[1] ; 
    var anno = oldDateArray[2] ; 
      
        if(Number(giorno) < 10 ){
          giorno = "0" + (giorno).toString() ; 

        }  
    
        if(Number(mese) < 10 ){
          mese = "0" + ((mese).toString) ; 

        }
    







    date = anno+"-"+mese+"-"+giorno ; 

    return date ; 



  }

  conversioneArrayInJson(data : any){


    var JsonSavedFood : Array<CIBOEXTENDED> =[] ; 
            
          for (var i = 0 ; i < data.length ; i++){

            

              JsonSavedFood[i]={

                "id": data[i][0] , 
                "quantita":data[i][2],
                "nome":data[i][3],
                "proteine":data[i][4],
                "grassi":data[i][5],
                "carboidrati":data[i][6],
                "calorie":data[i][7] , 



              }  
          }
          
          this.listaAlimenti = JsonSavedFood ; 










  }
    


 


 







  


    


 







  









}




