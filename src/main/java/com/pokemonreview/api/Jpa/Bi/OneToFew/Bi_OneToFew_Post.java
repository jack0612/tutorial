package com.pokemonreview.api.Jpa.Bi.OneToFew;
//https://vladmihalcea.com/the-best-way-to-map-a-onetomany-association-with-jpa-and-hibernate
/*
 93 OneToMany or ManyToOne best practice
1) use unidirectional ManyToOne and JPQL query with join fetch
2) avoid CascadeType.Remove because hibernate first load then remove
3)bidirectional assocoation needs help functions
4)use FetchType.LAZY on many side , which is default behaviour
 */

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

//Uni_ManyToOne_Post is owning side
@Getter
@Setter
@Entity
public class Bi_OneToFew_Post {

	@Id
	@GeneratedValue
	private Long id;

	private String title;
	

	@OneToMany(mappedBy = "post", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH,CascadeType.DETACH}, orphanRemoval = true)
	private List<Bi_OneToFew_Comment> comments = new ArrayList<>();

	// Constructors, getters and setters removed for brevity

	public void addComment(Bi_OneToFew_Comment comment) {
		comments.add(comment);
		comment.setPost(this);
	}

	public void removeComment(Bi_OneToFew_Comment comment) {
		comments.remove(comment);
		comment.setPost(null);
	}

	public Bi_OneToFew_Post(String title) {
		super();
		this.title = title;
	}
}

