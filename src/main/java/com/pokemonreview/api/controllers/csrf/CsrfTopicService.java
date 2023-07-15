package com.pokemonreview.api.controllers.csrf;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class CsrfTopicService {
	 private final CsrfTopicRepository topicRepository;

	    public CsrfTopicService(CsrfTopicRepository topicRepository){
	        this.topicRepository = topicRepository;
	    }

	    public CsrfTopic create(CsrfTopic topic){
	        return topicRepository.save(topic);
	    }

	    public List<CsrfTopic> list(){
	        return topicRepository.findAll();
	    }

	    public CsrfTopic get(Long topicId){
	        return topicRepository.findById(topicId).orElseThrow();
	    }

	    public CsrfTopic update(CsrfTopic topic){
	        LocalDateTime created = topicRepository.findById(topic.getTopicId())
	                .orElseThrow()
	                .getCreated();
	        topic.setCreated(created);
	        return topicRepository.save(topic);
	    }

	    public void delete(Long topicId){
	        if(!topicRepository.existsById(topicId)) throw new NoSuchElementException();
	        topicRepository.deleteById(topicId);
	    }
}
