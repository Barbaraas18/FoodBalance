package com.FoodBalance.FoodBalance.DTO;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Data
public class PastoMacronutrientiDTO {
    private List<LocalDate> data= new ArrayList<>();
    private List<BigDecimal> carboidrati=new ArrayList<>();
    private List<BigDecimal> grassi= new ArrayList<>();
    private List<BigDecimal> proteine= new ArrayList<>();

}
