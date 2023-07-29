package com.pokemonreview.api.Jpa.Uni.OneToOne;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UniOneToOne_Service {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	UniOneToOne_UserRepository userRepository;
	@Autowired
	UniOneToOne_VehicleRepository vehicleRepository;

	public void service() {
		UniOneToOne_User user = new UniOneToOne_User();

		UniOneToOne_Vehicle vehicle = new UniOneToOne_Vehicle();

		user.setUserName("First User");

		vehicle.setVehicleName("car");

		//user.setVehicle(vehicle);

		userRepository.save(user);
		vehicleRepository.save(vehicle);
	}
}
