package com.FoodBalance.FoodBalance.Service.Implementation;

import com.FoodBalance.FoodBalance.Model.Cibi;
import com.FoodBalance.FoodBalance.Repository.CibiRepository;
import com.FoodBalance.FoodBalance.Service.CibiInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class CibiService implements CibiInterface {

    @Autowired
    private CibiRepository cibiRepository;

    @Override
    public Cibi saveCibo(Cibi cibo){
        calcoloCalorie(cibo);
        return cibiRepository.save(cibo);
    }


    private void calcoloCalorie(Cibi cibo){
        cibo.setCalorie(cibo.getGrassi().multiply(new BigDecimal(9)).add(cibo.getCarboidrati().multiply(new BigDecimal(4))).add(cibo.getProteine().multiply(new BigDecimal(4))).intValue());
    }

    public Cibi getCibo(String name ,int amount ) {

        CibiService cibi_service = new CibiService() ;

        Cibi cibo = cibiRepository.findByNome(name) ;



        cibo.setProteine(
                (cibo.getProteine().divide(new BigDecimal(100))).multiply(new BigDecimal(amount))

        );

        cibo.setCarboidrati(
                (cibo.getCarboidrati().divide(new BigDecimal(100))).multiply(new BigDecimal(amount))
        );
        cibo.setGrassi(
                (cibo.getGrassi().divide(new BigDecimal(100))).multiply(new BigDecimal(amount))
        );
        cibi_service.calcoloCalorie(cibo);

        return cibo ;


    }

    public List<String> getListaNomiCibi(String name){
        return cibiRepository.getListaNomiCibi("%"+name+"%") ;
    }

















}
