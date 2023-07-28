package com.pokemonreview.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.web.reactive.function.client.WebClient;

//Spring Boot supports executing a custom schema.sql file in the classpath when the application starts up.
//This overrides the ddl-auto configuration
//We can control whether the schema.sql file should be executed with the property spring.datasource.initialization-mode. 
//The default value is embedded,
//meaning it will only execute for an embedded database (i.e. in our tests). If we set it to always, it will always execute.
@SpringBootApplication
public class ApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}
	
	@Bean
	public WebClient webClient() {
		return WebClient.builder().build();
	}

}
