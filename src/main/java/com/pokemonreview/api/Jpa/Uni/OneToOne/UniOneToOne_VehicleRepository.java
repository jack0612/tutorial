package com.pokemonreview.api.Jpa.Uni.OneToOne;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

 
@Repository
public interface UniOneToOne_VehicleRepository extends JpaRepository<UniOneToOne_Vehicle, Long>{

}
