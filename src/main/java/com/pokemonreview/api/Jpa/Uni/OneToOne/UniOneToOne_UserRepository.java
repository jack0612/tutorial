package com.pokemonreview.api.Jpa.Uni.OneToOne;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

 
@Repository
public interface UniOneToOne_UserRepository extends JpaRepository<UniOneToOne_User, Long> {

}
