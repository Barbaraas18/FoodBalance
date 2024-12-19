package com.FoodBalance.FoodBalance.Service.Implementation;

import com.FoodBalance.FoodBalance.DTO.UtenteLoginDTO;
import com.FoodBalance.FoodBalance.DTO.UtenteUpdateDatiAccountDTO;
import com.FoodBalance.FoodBalance.DTO.UtenteUpdateDatiDTO;
import com.FoodBalance.FoodBalance.Enum.Attivita;
import com.FoodBalance.FoodBalance.Enum.Sesso;
import com.FoodBalance.FoodBalance.Model.Utente;
import com.FoodBalance.FoodBalance.Repository.UtenteRepository;
import com.FoodBalance.FoodBalance.Service.UtenteInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ObjectNode;

import java.math.BigDecimal;
import java.math.RoundingMode;

@Service
public class UtenteService implements UtenteInterface {

    @Autowired
    private UtenteRepository utenteRepository;

    @Override
    public Utente saveUtente(Utente utente) {
        try {
            calcoloAttributi(utente);
            return utenteRepository.save(utente);
        }
        catch(Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public String deleteUtente(int id){
        if(utenteRepository.existsById(id)) {
            utenteRepository.deleteById(id);
            return "eliminato";
        }
        else{
            return "utente non trovato";
        }
    }

    @Override
    public Object getUtente(int id){
        try {
            return utenteRepository.findById(id).orElse(null);
        }
        catch(Exception e) {
          throw new RuntimeException(e);
        }
    }

    //funzione per aggiornare i dati personali dell'utente
    @Override
    public Object updateUtenteDati(UtenteUpdateDatiDTO utente){
        try{
        Utente old_utente=utenteRepository.findById(utente.getUser_id()).orElse(null);
        if (old_utente!=null) {
            old_utente.setAltezza(utente.getAltezza());
            old_utente.setPeso(utente.getPeso());
            old_utente.setEta(utente.getEta());
            old_utente.setAttivita(utente.getAttivita());
            calcoloAttributi(old_utente);
            return utenteRepository.save(old_utente);
        }
        else {
            return "ERRORE: l'utente non esiste";
        }
        }
        catch(Exception e){
            throw new RuntimeException(e);
            }

    }

    //funzione per aggiornare i dati, quali username e password, dell'utente
    @Override
    public Object updateUtenteDatiAccount(UtenteUpdateDatiAccountDTO utente){
        try{
        Utente old_utente=utenteRepository.findById(utente.getUser_id()).orElse(null);
        if (old_utente!=null){
            old_utente.setUsername(utente.getUsername());
            if(utente.getPassword_utente()!=null){
                if (old_utente.getPassword_utente().equals(utente.getOld_password_utente())){
                    old_utente.setPassword_utente(utente.getPassword_utente());
                    return utenteRepository.save(old_utente);
                }
                else{
                    return "ERRORE: la vecchia password inserita non coincide";
                }
            }
            else{
                return utenteRepository.save(old_utente);
            }}

        return "ERRORE: l'utente non esiste";
    }
        catch(Exception e){
            throw new RuntimeException(e);
        }
    }

    //funzione di login
    @Override
    public Object loginUtente(UtenteLoginDTO utente){
        try{
        Utente utenteTrovato=utenteRepository.findByEmail(utente.getEmail());
        if ( utenteTrovato!=null && utenteTrovato.getPassword_utente().equals(utente.getPassword_utente())){
            return utenteTrovato.getUser_id();
        }
        else {
            return 0;
        }}
        catch(Exception e){
            throw new RuntimeException(e);
    }}

    //calcolo dei restanti attributi dell'utente dati i dati immessi
    private void calcoloAttributi(Utente utente){

        BigDecimal bmi=utente.getPeso().divide(utente.getAltezza().divide(new BigDecimal(100),2, RoundingMode.HALF_UP).pow(2),2, RoundingMode.HALF_UP);
        utente.setBmi(bmi);
        BigDecimal bmr = new BigDecimal(0);
        BigDecimal calorie = new BigDecimal(0);

        if(bmi.compareTo(new BigDecimal(18.5))<0){
            //categoria_peso = "Sottopeso" ;
            utente.setCategoria_peso("Sottopeso");
        } else if (bmi.compareTo(new BigDecimal(24.9))<0) {
            //categoria_peso = "Normopeso" ;
            utente.setCategoria_peso("NormoPeso");

        }else if (bmi.compareTo(new BigDecimal(29.9))<0){
            //categoria_peso = "Sovrappeso" ;
            utente.setCategoria_peso("Sovrappeso");

        }


        if(utente.getSesso()== Sesso.M){

            bmr = (new BigDecimal(10).multiply(utente.getPeso()).add
                    (new BigDecimal(6.25).multiply(utente.getAltezza())).subtract
                    (new BigDecimal(5).multiply(new BigDecimal(utente.getEta()))).add(new BigDecimal(5)));
        } else if (utente.getSesso()== Sesso.F) {
            bmr = (new BigDecimal(10).multiply(utente.getPeso()).add
                    (new BigDecimal(6.25).multiply(utente.getAltezza())).subtract
                    (new BigDecimal(5).multiply(new BigDecimal(utente.getEta()))).subtract(new BigDecimal(161)));
        }
        utente.setBmr(bmr);


        if (utente.getAttivita()== Attivita.SEDENTARIO){

            //SEDENTARIO') then (`bmr` * 1.2)
            calorie = utente.getBmr().multiply(new BigDecimal(1.2));

        } else if (utente.getAttivita()==Attivita.LEGGERMENTE_ATTIVO) {
            //ta` = _utf8mb4'LEGGERMENTE ATTIVO') then (`bmr` * 1.375)
            calorie = utente.getBmr().multiply(new BigDecimal(1.375));

        } else if (utente.getAttivita()==Attivita.MODERATAMENTE_ATTIVO) {
            //attivita` = _utf8mb4'MODERATAMENTE ATTIVO') then (`bmr` * 1.55)
            calorie = utente.getBmr().multiply(new BigDecimal(1.55));

        } else if (utente.getAttivita()==Attivita.MOLTO_ATTIVO){
            //'MOLTO ATTIVO') then (`bmr` * 1.725)
            calorie = utente.getBmr().multiply(new BigDecimal(1.725));
        } else if (utente.getAttivita()==Attivita.ESTREMAMENTE_ATTIVO) {
            //'ESTREMAMENTE ATTIVO') then (`bmr` * 1.9)

            calorie = utente.getBmr().multiply(new BigDecimal(1.9));
        }
        if (utente.getCategoria_peso().equals("Sottopeso")){
            //Aggiungiamo un 20% di calorie in più qualora l'utente è sottopeso
            calorie=calorie.add(calorie.multiply(new BigDecimal(0.2)));
        } else if (utente.getCategoria_peso().equals("Sovrappeso")) {
            //Togliamo un 20% di calorie in meno qualora l'utente è in sovrappeso
            calorie=calorie.add(calorie.multiply(new BigDecimal(-0.2)));
        }

        calorie=calorie.setScale(2, RoundingMode.HALF_UP);
        utente.setCalorie(calorie);

    }
}


