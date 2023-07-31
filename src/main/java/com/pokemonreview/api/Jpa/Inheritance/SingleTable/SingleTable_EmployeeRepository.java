package com.pokemonreview.api.Jpa.Inheritance.SingleTable;

import org.springframework.data.jpa.repository.JpaRepository;
//https://stackoverflow.com/questions/63656497/jpa-repository-with-single-table-inheritance-hibernate
public interface SingleTable_EmployeeRepository extends JpaRepository<SingleTable_Employee, String>{

}
