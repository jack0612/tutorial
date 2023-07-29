package com.pokemonreview.api;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.reactive.function.client.WebClient;

import com.pokemonreview.api.Jpa.OneToOne.MapsId.Mapsid_OneToOne_Service;
import com.pokemonreview.api.Jpa.Uni.OneToOne.UniOneToOne_Service;
import com.pokemonreview.api.Jpa.Uni.OneToOne.UniOneToOne_User;
import com.pokemonreview.api.Jpa.Uni.OneToOne.UniOneToOne_UserRepository;
import com.pokemonreview.api.Jpa.Uni.OneToOne.UniOneToOne_Vehicle;
import com.pokemonreview.api.Jpa.Uni.OneToOne.UniOneToOne_VehicleRepository;

//Spring Boot supports executing a custom schema.sql file in the classpath when the application starts up.
//This overrides the ddl-auto configuration
//We can control whether the schema.sql file should be executed with the property spring.datasource.initialization-mode. 
//The default value is embedded,
//meaning it will only execute for an embedded database (i.e. in our tests). If we set it to always, it will always execute.
@SpringBootApplication
public class ApiApplication implements CommandLineRunner{

	@Autowired
	UniOneToOne_Service service;
	@Autowired
	Mapsid_OneToOne_Service mapsidService;
	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

	@Bean
	public WebClient webClient() {
		return WebClient.builder().build();
	}


 

	@Override
	public void run(String... args) throws Exception {
		System.out.println("=====================CommandLineRunner");
		mapsidService.doService();
		//service.service();
		
	}

}
