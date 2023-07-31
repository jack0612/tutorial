package com.pokemonreview.api.Jpa.Inheritance.SingleTable;

import jakarta.persistence.*;


@Entity
@DiscriminatorValue(value = "Employee")
public class SingleTable_Employee extends SingleTable_Person{
	
	Long employeeSalary;

    public SingleTable_Employee(String name,  String email, Long employeeSalary) {
        super(name,  email);
        this.employeeSalary=employeeSalary;
    }

    public SingleTable_Employee() {
    }

    @Override
    public String toString() {
        return "Name: " + this.getName() + ", Address: " + ", E-mail: " + this.getEmail();
    }

	public Long getEmployeeSalary() {
		return employeeSalary;
	}

	public void setEmployeeSalary(Long employeeSalary) {
		this.employeeSalary = employeeSalary;
	}
    
}
