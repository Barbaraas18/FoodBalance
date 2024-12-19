package com.FoodBalance.FoodBalance.Service;

import com.FoodBalance.FoodBalance.Model.Cibi;

import java.util.List;

public interface CibiInterface {
    Cibi saveCibo(Cibi Cibo);

    List<String> getListaNomiCibi(String nome) ;
}
