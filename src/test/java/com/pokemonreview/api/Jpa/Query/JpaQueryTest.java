package com.pokemonreview.api.Jpa.Query;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;

import jakarta.annotation.Resource;

@SpringBootTest
@ExtendWith(MockitoExtension.class)
public class JpaQueryTest {
	@Resource
	private DepartmentRepository departmentRepository;

	@Resource
	private EmployeeRepository employeeRepository;
	

	@Test
	public void Test() {
		List<DeptEmpDto> list = employeeRepository.fetchEmpDeptDataInnerJoin();
		list.forEach(l -> System.out.println(l));
		assertEquals(3,list.size());
	}
	 
}
