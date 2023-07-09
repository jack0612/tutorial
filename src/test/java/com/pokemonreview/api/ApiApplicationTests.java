package com.pokemonreview.api;

 
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;

import com.pokemonreview.api.controllers.PokemonController;
//https://spring.io/guides/gs/testing-web/
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class ApiApplicationTests {
	
	@Value(value="${local.server.port}")
	private int port;

	@Autowired
	private TestRestTemplate restTemplate;

	@Autowired
	private PokemonController controller;
	//smoke test
	@Test
	public void contextLoads() throws Exception {
		Assertions.assertThat(controller).isNotNull();
	}
	
 
}
