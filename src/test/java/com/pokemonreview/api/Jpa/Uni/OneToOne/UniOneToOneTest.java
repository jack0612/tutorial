package com.pokemonreview.api.Jpa.Uni.OneToOne;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import com.pokemonreview.api.Jpa.Uni.OneToOne.UniOneToOne_User;
import com.pokemonreview.api.Jpa.Uni.OneToOne.UniOneToOne_UserRepository;
import com.pokemonreview.api.Jpa.Uni.OneToOne.UniOneToOne_Vehicle;

@ExtendWith(MockitoExtension.class)
@DataJpaTest
//@SpringBootTest
public class UniOneToOneTest {
	 Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	UniOneToOne_UserRepository userRepository;
	
	@Test
	void test(){
		UniOneToOne_User user =new UniOneToOne_User();
		
		UniOneToOne_Vehicle vehicle =new UniOneToOne_Vehicle();
		
		user.setUserName("First User");
		
		vehicle.setVehicleName("car");
		
		//user.setVehicle(vehicle);
		
		userRepository.save(user);
		
		
	}
}
