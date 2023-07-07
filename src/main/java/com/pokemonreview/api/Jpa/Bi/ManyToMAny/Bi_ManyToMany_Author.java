package com.pokemonreview.api.Jpa.Bi.ManyToMAny;

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

	@ManyToMany(mappedBy="authors")
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
