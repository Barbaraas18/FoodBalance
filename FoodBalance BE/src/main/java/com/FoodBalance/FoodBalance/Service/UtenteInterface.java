package com.FoodBalance.FoodBalance.Service;

import com.FoodBalance.FoodBalance.DTO.UtenteLoginDTO;
import com.FoodBalance.FoodBalance.DTO.UtenteUpdateDatiAccountDTO;
import com.FoodBalance.FoodBalance.DTO.UtenteUpdateDatiDTO;
import com.FoodBalance.FoodBalance.Model.Utente;
import com.fasterxml.jackson.databind.node.ObjectNode;

public interface UtenteInterface {

    Utente saveUtente(Utente utente);

    String deleteUtente(int id);

    Object getUtente(int id);

    Object updateUtenteDati(UtenteUpdateDatiDTO utente);
    Object updateUtenteDatiAccount(UtenteUpdateDatiAccountDTO utente);
    Object loginUtente(UtenteLoginDTO utente);
}
