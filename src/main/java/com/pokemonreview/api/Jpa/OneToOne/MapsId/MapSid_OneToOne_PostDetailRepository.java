package com.pokemonreview.api.Jpa.OneToOne.MapsId;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

 

public interface MapSid_OneToOne_PostDetailRepository extends JpaRepository<Mapsid_OneToOne_PostDetail, Long>{
	@Query("SELECT t FROM Mapsid_OneToOne_PostDetail t")
	List<Mapsid_OneToOne_PostDetail> findAll();
	
	@Query(value = "SELECT * FROM Mapsid_One_To_One_Post_Detail", nativeQuery = true)
	List<Mapsid_OneToOne_PostDetail> findAllNative();
	
	@Query("SELECT t FROM Mapsid_OneToOne_PostDetail t WHERE t.detail = ?1")
	List<Mapsid_OneToOne_PostDetail> findByDetailEqual(String detail);
}
