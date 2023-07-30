package com.pokemonreview.api.Jpa.Bi.OneToMany.BestPractice;
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
public class Bi_OneToMany_Post {

	@Id
	@GeneratedValue
	private Long id;

	private String title;
	
	/*
	 *93 OneToMany or ManyToOne best practice
 1)use FetchType.LAZY on many side ,and JPQL query with join fetch
2) avoid CascadeType.Remove because hibernate first load then remove
3)bidirectional assocoation needs help functions

	 */
	/*
	 * https://www.baeldung.com/jpa-joincolumn-vs-mappedby
	 JPA Relationships can be either unidirectional or bidirectional. This simply means we can model them as an attribute on exactly one of the associated entities or both.

	Defining the direction of the relationship between entities has no impact on the database mapping. It only defines the directions in which we use that relationship in our domain model.

	For a bidirectional relationship, we usually define

	the owning side
	inverse or the referencing side
	 */
	// the mappedBy attribute is used to define the referencing side (non-owning side) of the relationship.
	@OneToMany(mappedBy = "post", fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH,CascadeType.DETACH}, orphanRemoval = true)
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

