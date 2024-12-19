import { Injectable } from "@angular/core";
import { ciboDto } from "../Interfacce/ciboDto";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root' ,
})
export class CiboService{

    private url = "http://localhost:8080" ; 
    constructor(private http : HttpClient){}
  
 
    getCibo(JsonCibo : ciboDto){

        return this.http.get(this.url+"/getCibo"+"/"+JsonCibo.nome+"/"+JsonCibo.quantita.toString())
      

    }

    getListaNomiCibi( nome : String):any{

        /*     /getListaCibi/{nome} */
        return this.http.get(this.url+"/getListaCibi/"+nome) ; 

    
    }















}