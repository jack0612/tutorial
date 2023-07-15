package com.pokemonreview.api.controllers.csrf;

//https://medium.com/@thecodinganalyst/configure-spring-security-csrf-for-testing-on-swagger-e9e6461ee0c1
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = {"*"})
@RequestMapping("/api/v1/topics")
public class CsrfTopicController {

	private final CsrfTopicService topicService;

    public CsrfTopicController(CsrfTopicService topicService){
        this.topicService = topicService;
    }

    @GetMapping
    public List<CsrfTopic> listTopics(){
        return topicService.list();
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public CsrfTopic createTopic(@RequestBody CsrfTopic topic){
        return topicService.create(topic);
    }

    @GetMapping(value = "/{topicId}")
    public CsrfTopic getTopic(@PathVariable("topicId") Long topicId){
        try{
            return topicService.get(topicId);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping
    public CsrfTopic updateTopic(@RequestBody CsrfTopic topic){
        try{
            return topicService.update(topic);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }

    @DeleteMapping(value = "/{topicId}")
    public void deleteTopic(@PathVariable("topicId") Long topicId){
        try{
            topicService.delete(topicId);
        }catch (NoSuchElementException e){
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }

    }
}
