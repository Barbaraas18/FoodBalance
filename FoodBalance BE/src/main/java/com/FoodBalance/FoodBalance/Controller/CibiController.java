package com.FoodBalance.FoodBalance.Controller;

import com.FoodBalance.FoodBalance.Model.Cibi;
import com.FoodBalance.FoodBalance.Service.Implementation.CibiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class CibiController {

    @Autowired
    private CibiService cibiService;

    @PostMapping("/saveCibo")
    public Cibi postCibo(@RequestBody Cibi cibo)
    {
        return cibiService.saveCibo(cibo);
    }

    @GetMapping("/getCibo/{nome}/{quantita}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Cibi getCibo(@PathVariable String nome,@PathVariable int quantita){

        return cibiService.getCibo(nome , quantita ) ;
    }


    @GetMapping("/getListaCibi/{nome}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<String> getListaNomiCibi(@PathVariable String nome){
        return cibiService.getListaNomiCibi(nome) ;
    }



}
