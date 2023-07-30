package com.pokemonreview.api.Jpa.OneToOne.MapsId;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MapSid_OneToOne_PostRepository extends JpaRepository<MapSid_OneToOne_Post, Long>{
	
	@Query("SELECT   e FROM MapSid_OneToOne_Post e LEFT  JOIN e.detail d")
	List<MapSid_OneToOne_PostRepository> findAllPostAndDetails();
}
