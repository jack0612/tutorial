package com.pokemonreview.api.Jpa.Inheritance.SingleTable;

import jakarta.persistence.*;


@Entity
@DiscriminatorValue(value = "Employee")
public class SingleTable_Employee extends SingleTable_Person{

    public SingleTable_Employee(String name, String address, String phone, String email) {
        super(name, address, phone, email);
    }

    public SingleTable_Employee() {
    }

    @Override
    public String toString() {
        return "Name: " + this.getName() + ", Address: " + this.getAddress() + ", Phone: " + this.getPhone() + ", E-mail: " + this.getEmail();
    }
    
}
