package com.FoodBalance.FoodBalance.DTO;

import lombok.Data;

@Data
public class UtenteUpdateDatiAccountDTO {
    private int user_id;
    private String username;

    private String old_password_utente;
    private String password_utente; //nuova password utente

}
