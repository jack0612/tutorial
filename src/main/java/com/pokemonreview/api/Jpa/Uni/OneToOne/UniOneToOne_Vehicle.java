package com.pokemonreview.api.Jpa.Uni.OneToOne;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class UniOneToOne_Vehicle {
	
	@Id
	@GeneratedValue
	Long  vehicleId;
	
	String vehicleName;

}
