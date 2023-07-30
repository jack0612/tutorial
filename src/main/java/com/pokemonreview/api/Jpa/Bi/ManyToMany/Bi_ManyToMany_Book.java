package com.pokemonreview.api.Jpa.Bi.ManyToMany;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
//referencing side
@Entity
public class Bi_ManyToMany_Book {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;

	@Version
	private int version;

	private String title;

	//owning side
	//https://www.infoworld.com/article/3387643/java-persistence-with-jpa-and-hibernate-part-2-many-to-many-relationships.html
	// In lazy case,  when we retrieve a Book from the database, we will NOT   automatically retrieve all of its corresponding authors.
	@ManyToMany(fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH,CascadeType.DETACH})
	@JoinTable( 
				joinColumns = { @JoinColumn(name = "fk_book") }, 
				inverseJoinColumns = { @JoinColumn(name = "fk_author") })
	private List<Bi_ManyToMany_Author> authors = new ArrayList<>();

	public Long getId() {
		return this.id;
	}

	public int getVersion() {
		return this.version;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Bi_ManyToMany_Author> getAuthors() {
		return authors;
	}

	public void setAuthors(List<Bi_ManyToMany_Author> authors) {
		this.authors = authors;
	}

	public void addAuthor(Bi_ManyToMany_Author a) {
		this.authors.add(a);
		a.getBooks().add(this);
	}

	public void removeAuthor(Bi_ManyToMany_Author a) {
		this.authors.remove(a);
		a.getBooks().remove(this);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Bi_ManyToMany_Book)) {
			return false;
		}
		Bi_ManyToMany_Book other = (Bi_ManyToMany_Book) obj;
		if (id != null) {
			if (!id.equals(other.id)) {
				return false;
			}
		}
		return true;
	}

	@Override
	public int hashCode() {
		return 31;
	}

	@Override
	public String toString() {
		String result = getClass().getSimpleName() + " ";
		if (title != null && !title.trim().isEmpty())
			result += "title: " + title;
		return result;
	}
}
