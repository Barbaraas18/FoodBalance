package com.FoodBalance.FoodBalance.Controller;

import com.FoodBalance.FoodBalance.DTO.PastoCalorieDTO;
import com.FoodBalance.FoodBalance.DTO.PastoMacronutrientiDTO;
import com.FoodBalance.FoodBalance.Model.Pasto;
import com.FoodBalance.FoodBalance.Service.Implementation.PastoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PastoController {

    @Autowired
    private PastoService pastoService;

    /*@PostMapping("/savePasto")
    public Pasto postPasto(@RequestBody Pasto pasto)
    {
        return pastoService.savePasto(pasto);
    }*/
    @PostMapping("/savePasto")
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean postPasto(@RequestBody List<Pasto> listaPasti ){

        return pastoService.savePasto(listaPasti) ;

    }



    @DeleteMapping("/deletePasto/{id}")
    public String deletePasto(@PathVariable Integer id){
        return pastoService.deletePasto(id);
    }

    @GetMapping("/getPasto/{id}")
    public Pasto getPasto(@PathVariable int id){
        return pastoService.getPasto(id);
    }

    @PutMapping("/updatePasto")
    public Pasto updatePasto(@RequestBody Pasto pasto){
        return pastoService.updatePasto(pasto);
    }

    @GetMapping("/listaPastiOdierni/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Object[]> listaPastiOdierni(@PathVariable int id){
        return pastoService.listaPastiOdierni(id);
    }


    @GetMapping("/listaCalorieGiornaliere/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public PastoCalorieDTO listaCalorieGiornaliere(@PathVariable int id){
        return pastoService.listaCalorieGiornaliere(id);
    }

    @DeleteMapping("/deleteAllPasti/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public boolean deleteAllPasti(@PathVariable int id){
        return pastoService.deleteAllPasti(id) ;
    }

    @GetMapping("/listaMacronutrientiGiornalieri/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public PastoMacronutrientiDTO listaMacronutrientiGiornalieri(@PathVariable int id){
        return pastoService.listaMacronutrientiGiornalieri(id);
    }

    //nuove aggiunte di backend
    //this.url+"/listaPasti"+utente.user_id+"/"+ data_pasto
    @GetMapping("/listaPastiPassati/{id}/{data}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Object[]> listaPastiPassati(@PathVariable String id , @PathVariable String data){

        return pastoService.listaPastiPassati(id , data) ;

    }






}
