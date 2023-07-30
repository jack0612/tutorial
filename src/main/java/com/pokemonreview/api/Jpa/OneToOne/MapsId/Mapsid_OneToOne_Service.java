package com.pokemonreview.api.Jpa.OneToOne.MapsId;

import java.util.List;
import java.util.Optional;

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
		MapSid_OneToOne_Post post = MapSid_OneToOne_Post.builder().title("title").build();
		Mapsid_OneToOne_PostDetail detail = Mapsid_OneToOne_PostDetail.builder().detail("detail").build();
		post.setDetail(detail);
		detail.setPost(post);
		postRepository.save(post);
		postRepository.flush();
		System.out.println("aaaaaaaaaaaa" + post);
		logger.debug("bbbbbbb" + post);
		List<MapSid_OneToOne_Post> savedPosts = postRepository.findAll();
		savedPosts.forEach((p) -> {
			System.out.println("cccccccccccc" + p);
		});
		if (false) {
			Optional<Mapsid_OneToOne_PostDetail> optionalDetail = postDetailRepository.findById(post.getId());
			System.out.println("dddddd" + optionalDetail.orElse(new Mapsid_OneToOne_PostDetail()));
		}

		for (MapSid_OneToOne_Post post1 : savedPosts) {

			System.out.println("===================" + post1);
		}

//		List<MapSid_OneToOne_PostRepository> postAndDetails=postRepository.findAllPostAndDetails();
//		System.out.println("eeeeeeeee"+postAndDetails);
	}

}
