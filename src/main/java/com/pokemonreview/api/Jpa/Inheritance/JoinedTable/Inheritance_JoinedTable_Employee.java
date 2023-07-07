package com.pokemonreview.api.Jpa.Inheritance.JoinedTable;

import jakarta.persistence.*;

@Entity
@PrimaryKeyJoinColumn(name = "employee_id", referencedColumnName = "person_id")
public class Inheritance_JoinedTable_Employee extends Inheritance_JoinedTable_Person {
	private String position;

    public Inheritance_JoinedTable_Employee() {

    }

    public Inheritance_JoinedTable_Employee(String position) {
        this.position = position;
    }

    public String getPosition() {
        return this.position;
    }

    public void setPosition(String name) {
        this.position = name;
    }
}
