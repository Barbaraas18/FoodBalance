package com.FoodBalance.FoodBalance.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Entity
@Data
@Table(name = "pasto")
@AllArgsConstructor
@NoArgsConstructor
public class Pasto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_pasto;

    @Temporal(TemporalType.DATE)
    @Column(nullable = false)
    private Date data_pasto;

    @Column
    private int quantita;

    @ManyToOne
    @JoinColumn(name = "id_cibo", nullable = false)
    private Cibi cibi;

    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private Utente utente;
}
