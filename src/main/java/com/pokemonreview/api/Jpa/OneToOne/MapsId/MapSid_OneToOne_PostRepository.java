package com.pokemonreview.api.Jpa.OneToOne.MapsId;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MapSid_OneToOne_PostRepository extends JpaRepository<Mapsid_OneToOne_Post, Long>{
	
	@Query("SELECT   e FROM Mapsid_OneToOne_Post e JOIN FETCH e.detail ")
 
	List<Mapsid_OneToOne_Post> findAllPostAndDetails();
}
