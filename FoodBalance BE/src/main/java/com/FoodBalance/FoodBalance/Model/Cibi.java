package com.FoodBalance.FoodBalance.Model;

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
@Table(name = "cibi")
@AllArgsConstructor
@NoArgsConstructor
public class Cibi {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name="nome", length = 50)
    private String nome;

    @Column(name="proteine", precision = 8, scale = 2)
    private BigDecimal proteine;

    @Column(name="grassi", precision = 8, scale = 2)
    private BigDecimal grassi;

    @Column(name="carboidrati", precision = 8, scale = 2)
    private BigDecimal carboidrati;

    @Column(name="calorie")
    private int calorie;

    @OneToMany(mappedBy = "cibi")
    @JsonIgnore
    private List<Pasto> pasti;

}
