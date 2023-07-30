package com.pokemonreview.api.Jpa.Query;
//https://roytuts.com/spring-boot-data-jpa-left-right-inner-and-cross-join-examples/

import java.util.List;
 

import org.springframework.stereotype.Service;

import jakarta.annotation.Resource;
 

@Service
public class JoinQueryService {

	@Resource
	private DepartmentRepository departmentRepository;

	@Resource
	private EmployeeRepository employeeRepository;

	public List<DeptEmpDto> getDeptEmployeesLeftJoin() {
		List<DeptEmpDto> list = departmentRepository.fetchEmpDeptDataLeftJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}

	public List<DeptEmpDto> getDeptEmployeesRightJoin() {
		List<DeptEmpDto> list = departmentRepository.fetchEmpDeptDataRightJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}

	public List<DeptEmpDto> getDeptEmployeesInnerJoin() {
		List<DeptEmpDto> list = employeeRepository.fetchEmpDeptDataInnerJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}

	public List<DeptEmpDto> getDeptEmployeesCrossJoin() {
		List<DeptEmpDto> list = employeeRepository.fetchEmpDeptDataCrossJoin();
		list.forEach(l -> System.out.println(l));
		return list;
	}
	
	public void doService() {
	 
 
		List<DeptEmpDto> list=this.getDeptEmployeesInnerJoin();
		
	}

}