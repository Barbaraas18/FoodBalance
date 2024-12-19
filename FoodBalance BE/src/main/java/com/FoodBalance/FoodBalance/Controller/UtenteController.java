package com.FoodBalance.FoodBalance.Controller;
import com.FoodBalance.FoodBalance.DTO.UtenteLoginDTO;
import com.FoodBalance.FoodBalance.DTO.UtenteUpdateDatiAccountDTO;
import com.FoodBalance.FoodBalance.DTO.UtenteUpdateDatiDTO;
import com.FoodBalance.FoodBalance.Model.Utente;
import com.FoodBalance.FoodBalance.Service.Implementation.UtenteService;
import com.fasterxml.jackson.databind.node.ObjectNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UtenteController {
    @Autowired
    private UtenteService utenteService;

    @PostMapping("/saveUtente")
    @CrossOrigin(origins = "http://localhost:4200")
    public Utente postUtente( @RequestBody Utente utente)
    {
        return utenteService.saveUtente(utente);
    }

    @DeleteMapping("/deleteUtente/{id}")
    public String deleteUtente(@PathVariable Integer id){
        return utenteService.deleteUtente(id);
    }
    @GetMapping("/getUtente/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Object getUtente(@PathVariable int id){
        return utenteService.getUtente(id);
    }

    @PutMapping("/updateUtenteDati")
    @CrossOrigin(origins = "http://localhost:4200")
    public Object updateUtenteDati(@RequestBody UtenteUpdateDatiDTO utente){
        return utenteService.updateUtenteDati(utente);
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public Object loginUtente(@RequestBody UtenteLoginDTO utente){
        return utenteService.loginUtente(utente);
    }

    @PutMapping("/updateUtenteDatiAccount")
    @CrossOrigin(origins = "http://localhost:4200")
    public Object updateUtenteDatiAccount(@RequestBody UtenteUpdateDatiAccountDTO utente){
        return utenteService.updateUtenteDatiAccount(utente);
    }

}


