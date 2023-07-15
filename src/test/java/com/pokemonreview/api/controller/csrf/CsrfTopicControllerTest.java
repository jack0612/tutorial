package com.pokemonreview.api.controller.csrf;
//https://github.com/thecodinganalyst/forum/blob/csrf-example/src/test/java/com/hevlar/forum/controller/TopicControllerTest.java
import com.fasterxml.jackson.databind.ObjectMapper;
import com.pokemonreview.api.controllers.csrf.CsrfTopic;
import com.pokemonreview.api.controllers.csrf.CsrfTopicController;
import com.pokemonreview.api.controllers.csrf.CsrfTopicService;
import com.pokemonreview.api.security.ForumSecurityConfiguration;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;

import java.util.List;
import java.util.NoSuchElementException;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.doThrow;
import static org.mockito.BDDMockito.given;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors.csrf;

@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {ForumSecurityConfiguration.class, CsrfTopicController.class})
@WebMvcTest
public class CsrfTopicControllerTest {
	   @Autowired
	    MockMvc mockMvc;

	    @MockBean
	    CsrfTopicService topicService;

	    @Autowired
	    ObjectMapper objectMapper;

	    final String api = "/api/v1/topics";
	    
	    @Test
	    void givenTopicsExists_whenListTopic_thenReturnTopicList() throws Exception {
	        List<CsrfTopic> topicList = List.of(
	                new CsrfTopic("first topic"),
	                new CsrfTopic("second topic")
	        );
	        given(topicService.list()).willReturn(topicList);

	        mockMvc.perform(get(api).with(csrf()))
	                .andExpect(status().isOk())
	                .andExpect(jsonPath("$.length()").value(2));
	    }
	    
	    @Test
	    void whenCreateTopic_thenReturn301CreatedAndTopic() throws Exception {
	        CsrfTopic topic = CsrfTopic.builder()
	                .topicId(1L)
	                .title("topic")
	                .build();
	        given(topicService.create(any())).willReturn(topic);

	        RequestBuilder request = post(api)
	                .contentType(MediaType.APPLICATION_JSON)
	                .content(objectMapper.writeValueAsString(topic))
	                .with(csrf());
	        mockMvc.perform(request)
	                .andExpect(status().isCreated())
	                .andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_JSON))
	                .andExpectAll(
	                        jsonPath("$.topicId").value("1"),
	                        jsonPath("$.title").value("topic")
	                );
	    }
	    
}
