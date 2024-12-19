package com.FoodBalance.FoodBalance.DTO;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.time.LocalDate;

@Data
@NoArgsConstructor
public class PastoCalorieDTO {
    private List<LocalDate> data= new ArrayList<>();

    private List<Integer> calorie= new ArrayList<>();

    private BigDecimal media;
}
