package com.pokemonreview.api.Jpa.Inheritance.SingleTable;

import jakarta.persistence.*;

@Entity
@DiscriminatorValue(value = "Student")
public class SingleTable_Student extends SingleTable_Person{
	public SingleTable_Student(String name, String address, String phone, String email) {
        super(name, address, phone, email);
    }

    public SingleTable_Student() {
    }

    @Override
    public String toString() {
        return "Name: " + this.getName() + ", Address: " + this.getAddress() + ", Phone: " + this.getPhone() + ", E-mail: " + this.getEmail();
    }
    
}
