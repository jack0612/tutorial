package com.pokemonreview.api.Jpa.Bi.ManyToMany;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.*;
//owning side
@Entity
public class Bi_ManyToMany_Author {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", updatable = false, nullable = false)
	private Long id;
	
	@Version
	private int version;

	private String firstName;

	private String lastName;

	//Defining the direction of the relationship between entities has no impact on the database mapping.
	//It only defines the directions in which we use that relationship in our domain model.
	//For a bidirectional relationship, we usually define
	//	the owning side
	//	inverse or the referencing side
	//the mappedBy attribute is used to define the referencing side (non-owning side) of the relationship.
	//bi_many_to_many_book_authors table will be created
	@ManyToMany(mappedBy="authors",fetch = FetchType.LAZY, cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.REFRESH,CascadeType.DETACH})
	//	// In lazy case,  when we retrieve an Author from the database, we will NOT   automatically retrieve all of its corresponding books.
	private List<Bi_ManyToMany_Book> books = new ArrayList<>();

	public Long getId() {
		return this.id;
	}

	public int getVersion() {
		return this.version;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public List<Bi_ManyToMany_Book> getBooks() {
		return this.books;
	}

	public void setBooks(final List<Bi_ManyToMany_Book> books) {
		this.books = books;
	}
	
	public void addBook(Bi_ManyToMany_Book b) {
		this.books.add(b);
		b.getAuthors().add(this);
	}
	
	public void removeBook(Bi_ManyToMany_Book b) {
		this.books.remove(b);
		b.getAuthors().remove(this);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj) {
			return true;
		}
		if (!(obj instanceof Bi_ManyToMany_Author)) {
			return false;
		}
		Bi_ManyToMany_Author other = (Bi_ManyToMany_Author) obj;
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
		if (firstName != null && !firstName.trim().isEmpty())
			result += "firstName: " + firstName;
		if (lastName != null && !lastName.trim().isEmpty())
			result += ", lastName: " + lastName;
		return result;
	}
}
