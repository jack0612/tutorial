package com.pokemonreview.api.Jpa.Bi.OneToFew;



import org.assertj.core.api.Assertions;
import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;
import java.util.Optional;

//@DataJpaTest
//@AutoConfigureTestDatabase(connection = EmbeddedDatabaseConnection.H2)
@SpringBootTest
public class OneToFewTests {

	@Autowired
	private PostRepository postRepository;

	@Test
	public void PostRepository_Save_ReturnSavedPost() {

		Bi_OneToMany_Post post = new Bi_OneToMany_Post("First post");

		post.addComment(new Bi_OneToMany_Comment("My first review"));
		post.addComment(new Bi_OneToMany_Comment("My second review"));
		post.addComment(new Bi_OneToMany_Comment("My third review"));

		Bi_OneToMany_Post savedPost = this.postRepository.save(post);
		// Assert
		Assertions.assertThat(savedPost).isNotNull();
		Assertions.assertThat(savedPost.getId()).isGreaterThan(0);
		System.out.println("-----savedPost"+savedPost.getId());
	}

}
