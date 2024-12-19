package com.FoodBalance.FoodBalance.Repository;

import com.FoodBalance.FoodBalance.Model.Cibi;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface CibiRepository extends JpaRepository<Cibi, Integer> {


    Cibi findByNome (String nome);

    @Query(value = "SELECT nome FROM Cibi WHERE nome LIKE :Nome " , nativeQuery = true)
    List<String> getListaNomiCibi(@Param("Nome") String Nome) ;

}
