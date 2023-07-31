package com.pokemonreview.api.Jpa.Inheritance.SingleTable;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue(value = "Student")
public class SingleTable_Student extends SingleTable_Person{
	Long studentScholarship;
	public SingleTable_Student(String name,  String email,Long studentScholarship) {
        super(name, email);
        this.studentScholarship=studentScholarship;
    }

    public SingleTable_Student() {
    }

    @Override
    public String toString() {
        return "Name: " + this.getName()  + ", E-mail: " + this.getEmail();
    }

	public Long getStudentScholarship() {
		return studentScholarship;
	}

	public void setStudentScholarship(Long studentScholarship) {
		this.studentScholarship = studentScholarship;
	}
    
    
    
}
