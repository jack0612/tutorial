package com.pokemonreview.api.Jpa.Inheritance.SingleTable;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

//https://stackoverflow.com/questions/63656497/jpa-repository-with-single-table-inheritance-hibernate
public interface SingleTable_PersonRepository  extends JpaRepository<SingleTable_Person, String> {

}

 