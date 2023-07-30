package com.pokemonreview.api.Jpa.Query;
 
//https://github.com/roytuts/spring-jpa/blob/master/spring-data-jpa-left-right-inner-cross-join/spring-data-join.sql
import java.io.Serializable;
import java.util.Set;

import jakarta.persistence.*;

 

@Entity
@Table(name = "department")
public class Department implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id")
	@GeneratedValue
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "description")
	private String description;

	@OneToMany(targetEntity = Employee.class, mappedBy = "department", orphanRemoval = false, fetch = FetchType.LAZY)
	private Set<Employee> employees;
	
	

	public Department() {
		super();
	}

	public Department(long id, String name, String description, Set<Employee> employees) {
		super();
		this.id = id;
		this.name = name;
		this.description = description;
		this.employees = employees;
	}

	public Department(String name, String description) {
		super();
		this.name = name;
		this.description = description;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(Set<Employee> employees) {
		this.employees = employees;
	}

}