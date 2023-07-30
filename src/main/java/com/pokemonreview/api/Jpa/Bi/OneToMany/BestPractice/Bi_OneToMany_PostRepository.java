package com.pokemonreview.api.Jpa.Bi.OneToMany.BestPractice;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


public   interface Bi_OneToMany_PostRepository extends JpaRepository<Bi_OneToMany_Post, Long> {
	
	@Query("SELECT   e FROM Bi_OneToMany_Post e JOIN FETCH e.comments ")
	List<Bi_OneToMany_Post> findAllPostAndComments();
}
