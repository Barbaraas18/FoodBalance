package com.FoodBalance.FoodBalance.Service.Implementation;

import com.FoodBalance.FoodBalance.DTO.PastoCalorieDTO;
import com.FoodBalance.FoodBalance.DTO.PastoMacronutrientiDTO;
import com.FoodBalance.FoodBalance.Model.Pasto;
import com.FoodBalance.FoodBalance.Repository.PastoRepository;
import com.FoodBalance.FoodBalance.Service.PastoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Service
public class PastoService implements PastoInterface {

    @Autowired
    private PastoRepository pastoRepository;

    @Override
    public String deletePasto(int id){
        if(pastoRepository.existsById(id)) {
            pastoRepository.deleteById(id);
            return "eliminato";
        }
        else{
            return "pasto non trovato";
        }
    }

    public boolean savePasto(List<Pasto> listaPasti){
        pastoRepository.saveAll(listaPasti) ;

        return true ;

    }


    @Override
    public Pasto getPasto(int id){
        return pastoRepository.findById(id).orElse(null);
    }

    @Override
    public Pasto updatePasto(Pasto pasto){
        Pasto old_pasto=pastoRepository.findById(pasto.getId_pasto()).orElse(null);
        if (old_pasto!=null) {
            old_pasto.setQuantita(pasto.getQuantita());
            return pastoRepository.save(old_pasto);
        }
        return null;
    }

    //funzione che ritorna la lista dei pasti di un dato utente nel giorno odierno
    @Override
    public List<Object[]> listaPastiOdierni(int id){
        return pastoRepository.listaPastiOdierni(id);
    }


    public boolean deleteAllPasti(int id){



        if (pastoRepository.existsDataByUserId(id) > 0){
            pastoRepository.CancellaTutti(id);
        }

        return true ;

    }

    //funzione che ritorna la lista delle calorie giornaliere assunte da un dato utente nell'arco di un mese
    @Override
    public PastoCalorieDTO listaCalorieGiornaliere(int id){
        try {
            List<Object[]> select_query = pastoRepository.listaCalorieGiornaliere(id);
            PastoCalorieDTO pastoCalorie = new PastoCalorieDTO();
            LocalDate today = LocalDate.now();
            BigDecimal media = new BigDecimal(0);
            for (Object[] pasto : select_query) {
                pastoCalorie.getData().add(LocalDate.parse(pasto[0].toString()));
                pastoCalorie.getCalorie().add(Integer.parseInt(pasto[1].toString()));
            }
            if (!pastoCalorie.getData().isEmpty() && !pastoCalorie.getCalorie().isEmpty()) {
                for (int i = 0; i < ChronoUnit.DAYS.between(pastoCalorie.getData().get(0), today); i++) {
                    int position = pastoCalorie.getData().size() - 1 - i;
                    if (!today.minusDays(i).equals(pastoCalorie.getData().get(position))) {
                        pastoCalorie.getData().add(position + 1, today.minusDays(i));
                        pastoCalorie.getCalorie().add(position + 1, 0);

                    }
                }
                for (Integer calorie : pastoCalorie.getCalorie()) {
                    media = media.add(new BigDecimal(calorie));
                }
                media = media.divide(new BigDecimal(pastoCalorie.getCalorie().size()), 2, RoundingMode.HALF_UP);
                pastoCalorie.setMedia(media);
            }
            return pastoCalorie;
        }
        catch(Exception e){
            throw new RuntimeException(e);
        }
    }
    //funzione che ritorna la lista dei macronutrienti giornalieri assunti da un dato utente nell'arco di un mese
    @Override
    public PastoMacronutrientiDTO listaMacronutrientiGiornalieri(int id) {
        try{
        List<Object[]> select_query = pastoRepository.listaMacronutrientiGiornalieri(id);
        PastoMacronutrientiDTO pastoMacronutrienti = new PastoMacronutrientiDTO();
        LocalDate today = LocalDate.now();
        for (Object[] pasto : select_query) {
            pastoMacronutrienti.getData().add(LocalDate.parse(pasto[0].toString()));
            pastoMacronutrienti.getCarboidrati().add(new BigDecimal(pasto[1].toString()));
            pastoMacronutrienti.getGrassi().add(new BigDecimal(pasto[2].toString()));
            pastoMacronutrienti.getProteine().add(new BigDecimal(pasto[3].toString()));
        }
        if (!pastoMacronutrienti.getData().isEmpty() && !pastoMacronutrienti.getCarboidrati().isEmpty() && !pastoMacronutrienti.getGrassi().isEmpty() && !pastoMacronutrienti.getProteine().isEmpty()) {
            for (int i = 0; i < ChronoUnit.DAYS.between(pastoMacronutrienti.getData().get(0), today); i++) {
                int position = pastoMacronutrienti.getData().size() - 1 - i;
                if (!today.minusDays(i).equals(pastoMacronutrienti.getData().get(position))) {
                    pastoMacronutrienti.getData().add(position + 1, today.minusDays(i));
                    pastoMacronutrienti.getCarboidrati().add(position + 1, new BigDecimal(0));
                    pastoMacronutrienti.getGrassi().add(position + 1, new BigDecimal(0));
                    pastoMacronutrienti.getProteine().add(position + 1, new BigDecimal(0));

                }
       }
        }
        return pastoMacronutrienti;}
        catch (Exception e){
             throw new RuntimeException(e);
        }


    }

    public List<Object[]> listaPastiPassati(String id , String date){
        try{
            return pastoRepository.listaPastiPassati(id, date) ;
        }
        catch(Exception e){
            throw new RuntimeException(e) ;
        }




    }









}
