package com.FoodBalance.FoodBalance.Repository;

import com.FoodBalance.FoodBalance.Model.Utente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UtenteRepository extends JpaRepository<Utente, Integer> {
    Utente findByEmail (String email);


}
