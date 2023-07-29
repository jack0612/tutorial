package com.pokemonreview.api.Jpa.OneToOne.MapsId;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class Mapsid_OneToOne_Service {
	private final Logger logger = LoggerFactory.getLogger(this.getClass());
	@Autowired
	MapSid_OneToOne_PostRepository postRepository;
	@Autowired
	MapSid_OneToOne_PostDetailRepository postDetailRepository;
	 
	
	public void doService() {
		MapSid_OneToOne_Post post=MapSid_OneToOne_Post.builder().title("title").build();
		Mapsid_OneToOne_PostDetail detail=Mapsid_OneToOne_PostDetail.builder().detail("detail").build();
		post.setDetail(detail);
		detail.setPost(post);
		postRepository.save(post);
		
		List<MapSid_OneToOne_Post> savedPosts = postRepository.findAll();
		System.out.println("aaaaaaaaaaaa"+post);
		for(MapSid_OneToOne_Post post1:savedPosts) {
//			logger.debug("===================" + post1);
//			System.out.println("===================" + post1);
		}
	}

	
}
