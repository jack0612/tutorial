package com.pokemonreview.api.controllers.csrf;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface  CsrfTopicRepository extends JpaRepository<CsrfTopic, Long> {
}
