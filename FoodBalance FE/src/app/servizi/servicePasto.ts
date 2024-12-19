import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cibo } from '../Interfacce/Cibo.Interface';
import { Pasto } from '../Interfacce/pasto.interface';
import { CIBOEXTENDED } from '../Interfacce/CIBOEXTENDED';

import { UtenteInterface as Utente } from '../Interfacce/utente.interface';



@Injectable({
  providedIn: 'root' ,
})

export class servicePasto {

    private url ="http://localhost:8080" ; 
    constructor(private http : HttpClient){}

    getPastiOdierni(user : Utente){
        //console.log("hello there")
        var id = user.user_id ; 
        //console.log(this.url+"/listaPastiOdierni/"+id) ; 
        return this.http.get(this.url+"/listaPastiOdierni/"+id)
          
    }
    getPastiGiornoPassato(utente : Utente , data_pasto : string ){


      
      return this.http.get(this.url+"/listaPastiPassati/"+utente.user_id+"/"+ data_pasto) ; 




    }


    savePasto(JsonLista : Array<CIBOEXTENDED> , user : Utente){
      
      var JsonPasto : Array<Pasto>  = []; 
      const dataAttuale = new Date() ; 
     
      //console.log(dataAttuale)



      var dataOdierna =  this.aggiustaData(dataAttuale)
      
      dataOdierna = this.conversioneDataCalendario(dataOdierna)  ; 

      console.log(dataOdierna)
      
      
    
        /* console.log(dataAttuale.getFullYear()+"-"+(dataAttuale.getMonth()+1)+"-"+giornoMese,) */
    for ( var i = 0; i < JsonLista.length ; i++){
        //console.log(i)
        var cibo : Cibo = {

          "id" : Number(JsonLista[i].id) , 
          "nome" : JsonLista[i].nome , 
          "carboidrati" : JsonLista[i].carboidrati ,
          "proteine" : JsonLista[i].proteine , 
          "grassi" : JsonLista[i].grassi , 
          "calorie" : JsonLista[i].calorie , 

      }

      
      JsonPasto[i] = {

        "quantita" : JsonLista[i].quantita ,

        "data_pasto" : dataOdierna , 
        "utente" : user , 
        

        "cibi" : cibo , 
      }   
  }
  //console.log(user.user_id) ; 
  //console.log(this.url+"/deleteAllPasti/"+user.user_id) ; 
  this.http.delete(this.url+"/deleteAllPasti/"+user.user_id.toString()).subscribe({
    
    
    next:()=>{
      //console.log(data) ; 
      this.http.post(this.url+"/savePasto", JsonPasto).subscribe({
        next:(data) =>{
          console.log("Dati Salvati Correttamente") ; 
        }, 
        
      }) 
    }
  })
}

    
  aggiustaData(d : Date ){

    
    var giorno ; 
    var mese ; 
    
    
      
      if(Number(d.getDate()) < 10 ){
        giorno = "0" + (d.getDate().toString()) ; 
        //onsole.log(giornoMese)
      }else{
        giorno = d.getDate().toString() ;
      }   
  
      if(Number(d.getMonth()) < 10 ){
        mese = "0" + ((d.getMonth()+1).toString()) ; 
        //onsole.log(giornoMese)
      }else{
        mese = (d.getMonth()+1).toString() ;
      } 
      console.log(mese+"-"+giorno+"-"+d.getFullYear())
    return (mese+"-"+giorno+"-"+d.getFullYear().toString()) ;
      
    
      

    
    



}

  listaCalorieGiornaliere(id:number){
    return this.http.get(this.url+"/listaCalorieGiornaliere/"+id.toString())
  }

  listaMacronutrientiGiornalieri(id:number){
    return this.http.get(this.url+"/listaMacronutrientiGiornalieri/"+id.toString())
  }


  conversioneDataCalendario(date : string){

    var oldDateArray = date.split("-") ; 

    date = oldDateArray[2]+"-"+oldDateArray[0]+"-"+oldDateArray[1] ; 
    
    //console.log(date)


    return date ; 



  }
    











}