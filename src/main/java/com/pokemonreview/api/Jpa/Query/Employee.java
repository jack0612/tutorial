package com.pokemonreview.api.Jpa.Query;
 

import java.io.Serializable;

 

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import jakarta.persistence.*;

@Entity
@Table(name = "employee")
public class Employee implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "name")
	private String name;

	@Column(name = "email")
	private String email;

	@Column(name = "address")
	private String address;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "dept_id", insertable = false, updatable = false)
	@Fetch(FetchMode.JOIN)
	private Department department;
	
	

	public Employee() {
		super();
		 
	}

	
	public Employee(String name, String email, String address) {
		super();
		this.name = name;
		this.email = email;
		this.address = address;
	}


	public Employee(long id, String name, String email, String address, Department department) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.address = address;
		this.department = department;
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

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

}