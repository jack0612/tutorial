package com.pokemonreview.api.Jpa.OneToOne.MapsId;

import java.util.List;
import java.util.Optional;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;
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
		Mapsid_OneToOne_Post post = Mapsid_OneToOne_Post.builder().title("title").build();
		Mapsid_OneToOne_PostDetail detail = Mapsid_OneToOne_PostDetail.builder().detail("detail").build();
		post.setDetail(detail);
		detail.setPost(post);
		postRepository.save(post);
		postRepository.flush();
		System.out.println("aaaaaaaaaaaa" + post);
		logger.debug("bbbbbbb" + post);
		List<Mapsid_OneToOne_Post> savedPosts = postRepository.findAllPostAndDetails(); 
		/*
		 because we use fetchType.LAZY in post entity, we can not use findAll() , we must use 
		 We can also use a JOIN FETCH directive in JPQL to fetch the associated collection on-demand:
		 if we use etchType.EAGER in post entity, we can use findAll()
		 *
		 */
		/*
		 * could not initialize proxy   - no Session
		 Access to a lazy-loaded object outside of the context of an open Hibernate session will result in this exception.
		 This error occurs when we try to fetch a lazy-loaded object from the database by using a proxy object, 
		 but the Hibernate session is already closed.
		 The solution:
		 We can also use a JOIN FETCH directive in JPQL to fetch the associated collection on-demand:
		 SELECT u FROM User u JOIN FETCH u.roles
		 */
		/*findAll() will do the followings because @Fetch(FetchMode.JOIN) is set in post Entity
		 * Hibernate: 
    select
        m1_0.id,
        m1_0.title 
    from
        mapsid_one_to_one_post m1_0
Hibernate: 
    select
        m1_0.post_id,
        m1_0.detail 
    from
        mapsid_one_to_one_post_detail m1_0 
    where
        m1_0.post_id=?
		*/
		savedPosts.forEach((p) -> {
			System.out.println("cccccccccccc" + p);
		});
		if (false) {
			Optional<Mapsid_OneToOne_PostDetail> optionalDetail = postDetailRepository.findById(post.getId());
			System.out.println("dddddd" + optionalDetail.orElse(new Mapsid_OneToOne_PostDetail()));
		}
		
	 
		
		for (Mapsid_OneToOne_Post post1 : savedPosts) {
			//Mapsid_OneToOne_PostDetail details=post1.getDetail();
			System.out.println("===================" + post1);
		}
		
		List<Mapsid_OneToOne_PostDetail> fetchedDetails=postDetailRepository.findByDetailEqual(detail.getDetail());
		System.out.println("===================fetchedDetails" + fetchedDetails.size());

//		List<MapSid_OneToOne_PostRepository> postAndDetails=postRepository.findAllPostAndDetails();
//		System.out.println("eeeeeeeee"+postAndDetails);
	}

}
