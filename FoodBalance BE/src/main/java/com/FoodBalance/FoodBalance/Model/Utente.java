package com.FoodBalance.FoodBalance.Model;

import com.FoodBalance.FoodBalance.Enum.Attivita;
import com.FoodBalance.FoodBalance.Enum.Sesso;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;

@Entity
@Data
@Table (name = "utente" )
@AllArgsConstructor
@NoArgsConstructor
public class Utente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    @Column(length = 50,nullable = false)
    private String username;

    @Column(length = 100, unique = true,nullable = false)
    private String email;

    @Column(length = 255,nullable = false)
    private String password_utente;

    @Column(nullable = false)
    private Integer eta;

    @Column(precision = 10,scale=0,nullable = false)
    private BigDecimal peso;

    @Column(precision = 10,scale = 0,nullable = false)
    private BigDecimal altezza;

    @Column(precision = 10,scale = 0)
    private BigDecimal bmi; //si puo' anche rimuovere

    @Column(length = 15)
    private String categoria_peso;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Sesso sesso;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Attivita attivita;

    @Column(precision = 10,scale = 0)
    private BigDecimal bmr; //si puo' anche rimuovere

    @Column(precision = 10, scale = 0)
    private BigDecimal calorie;

    @OneToMany(mappedBy = "utente", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Pasto> pasti;

}



