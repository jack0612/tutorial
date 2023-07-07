package com.pokemonreview.api.Jpa.Bi.OneToFew;

import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.*;

@Getter
@Setter
@Entity(name = "Bi_OneToMany_Comment")
public class Bi_OneToMany_Comment {

	@Id
	@GeneratedValue
	private Long id;

	private String review;

	@ManyToOne(fetch = FetchType.LAZY)
	private Bi_OneToMany_Post post;

	 

	@Override
	public boolean equals(Object o) {
		if (this == o)
			return true;
		if (!(o instanceof Bi_OneToMany_Comment))
			return false;
		return id != null && id.equals(((Bi_OneToMany_Comment) o).getId());
	}

	@Override
	public int hashCode() {
		return getClass().hashCode();
	}

	public Bi_OneToMany_Comment(String review) {
		super();
		this.review = review;
	}
}
