package com.FoodBalance.FoodBalance.DTO;

import com.FoodBalance.FoodBalance.Enum.Attivita;
import com.FoodBalance.FoodBalance.Enum.Sesso;
import lombok.Data;

import java.math.BigDecimal;

@Data
public class UtenteUpdateDatiDTO {
    private int user_id;
    private int eta;
    private BigDecimal altezza;
    private BigDecimal peso;
    private Attivita attivita;
}
