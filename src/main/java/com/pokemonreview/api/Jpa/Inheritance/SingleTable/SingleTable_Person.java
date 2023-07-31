package com.pokemonreview.api.Jpa.Inheritance.SingleTable;

import jakarta.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "PERSON_STATUS", discriminatorType = DiscriminatorType.STRING)
public abstract class SingleTable_Person {

	@Id
	@GeneratedValue
	private String name;
	private String email;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}



	public SingleTable_Person(String name,  String email) {
		this.name = name;
		this.email = email;
	}

	public SingleTable_Person() {
	}



	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "Name: " + this.name + ", Address: "  + ", E-mail: "
				+ this.email;
	}

}
