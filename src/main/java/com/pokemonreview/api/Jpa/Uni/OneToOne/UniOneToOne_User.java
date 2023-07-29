package com.pokemonreview.api.Jpa.Uni.OneToOne;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Entity
@Data
public class UniOneToOne_User {
	
	@Id
	@GeneratedValue
	Long userId;
	
	String userName;
	
//	@OneToOne
//	UniOneToOne_Vehicle vehicle;

}
