package com.FoodBalance.FoodBalance.Service;

import com.FoodBalance.FoodBalance.DTO.PastoCalorieDTO;
import com.FoodBalance.FoodBalance.DTO.PastoMacronutrientiDTO;
import com.FoodBalance.FoodBalance.Model.Pasto;

import java.util.List;

public interface PastoInterface {

    String deletePasto(int id);
    boolean savePasto(List<Pasto> listaPasti);
    boolean deleteAllPasti(int id) ;

    Pasto getPasto(int id);

    Pasto updatePasto(Pasto pasto);

    List<Object[]> listaPastiOdierni (int id);

    PastoCalorieDTO listaCalorieGiornaliere (int id);

    PastoMacronutrientiDTO listaMacronutrientiGiornalieri(int id);

    List<Object[]> listaPastiPassati(String id , String date) ;
}
