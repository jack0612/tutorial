package com.pokemonreview.api.Jpa.Bi.OneToFew;
//https://vladmihalcea.com/the-best-way-to-map-a-onetomany-association-with-jpa-and-hibernate

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

//Bi_OneToMany_Post is owning side
@Getter
@Setter
@Entity(name = "Bi_OneToMany_Post")
public class Bi_OneToMany_Post {

	@Id
	@GeneratedValue
	private Long id;

	private String title;
	

	@OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
	private List<Bi_OneToMany_Comment> comments = new ArrayList<>();

	// Constructors, getters and setters removed for brevity

	public void addComment(Bi_OneToMany_Comment comment) {
		comments.add(comment);
		comment.setPost(this);
	}

	public void removeComment(Bi_OneToMany_Comment comment) {
		comments.remove(comment);
		comment.setPost(null);
	}

	public Bi_OneToMany_Post(String title) {
		super();
		this.title = title;
	}
}

