package com.FoodBalance.FoodBalance.Repository;

import com.FoodBalance.FoodBalance.Model.Pasto;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.ListResourceBundle;

public interface PastoRepository extends JpaRepository<Pasto, Integer> {
   /* @Query(value="SELECT data_pasto, quantita,nome,quantita*proteine/100,quantita*grassi/100,quantita*carboidrati/100,quantita*calorie/100 from pasto join cibi on (id=id_cibo) where curdate()=data_pasto and user_id=:id ",nativeQuery = true)
    List<Object[]> listaPastiOdierni(@Param("id") int id); */

    @Query(value="SELECT data_pasto,sum(quantita*proteine*4/100), sum(quantita*grassi*9/100),sum(quantita*carboidrati*4/100) from pasto join cibi on (id=id_cibo) where user_id=:id group by data_pasto", nativeQuery = true)
    List<Object[]> listaMacronutrientiGiornalieri(@Param("id") int id);

    @Query(value="SELECT data_pasto,TRUNCATE(sum(quantita/100 *(grassi*9+carboidrati*4+proteine*4)),0) from pasto join cibi on (id=id_cibo) where user_id=:id and data_pasto BETWEEN DATE_SUB(CURDATE(), INTERVAL 30 DAY) AND CURDATE() group by data_pasto", nativeQuery = true)
    List<Object[]> listaCalorieGiornaliere(@Param("id") int id);

    @Modifying
    @Transactional
    @Query(value = "DELETE FROM pasto WHERE user_id =:id AND CURDATE() = DATE(data_pasto)", nativeQuery = true)
    void CancellaTutti(@Param("id") int id);// CANCELLA TUTTI , CANCELLA TUTTI I  PASTI DEL GIORNO CORRENTE DEL UTENTE ID


    @Query(value="SELECT id ,data_pasto, quantita,nome,quantita*proteine/100,quantita*grassi/100,quantita*carboidrati/100, TRUNCATE(quantita/100 *(grassi*9+carboidrati*4+proteine*4) ,0)    from pasto join cibi on (id_cibo = id) where curdate()=data_pasto and user_id=:id" , nativeQuery = true)
    List<Object[]> listaPastiOdierni(@Param("id") int id);// LISTA PASTI ODIERNI RACCOGLIE I DATI SALVATI NEL DB DEL UTENTE ID , NEL GIORNO CORRENTE

    @Query(value = "SELECT COUNT(*) FROM pasto WHERE user_id = :id ",nativeQuery = true)
    Integer existsDataByUserId(@Param("id")int id ) ; // VERIFICA ESISTENZA DATI IN DB



    @Query(value="SELECT id ,data_pasto, quantita,nome,quantita*proteine/100,quantita*grassi/100,quantita*carboidrati/100, TRUNCATE(quantita/100 *(grassi*9+carboidrati*4+proteine*4) ,0)    from pasto join cibi on (id_cibo = id) where data_pasto =:date and user_id=:id ",nativeQuery = true)
    List<Object[]> listaPastiPassati(@Param("id") String id , @Param("date") String date);
    



}
