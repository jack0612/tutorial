package com.pokemonreview.api.CoreJava.ImmutableClass;

import java.util.HashMap;

import org.junit.jupiter.api.Test;

public class ImmutableClassTest {
		@Test
	  void test( ) {
		HashMap<String, String> hm=new HashMap<>();
		hm.put("a", "1");
		System.out.println(hm);
		ImmutableClass ic=new ImmutableClass(1,"aa",hm);
		ic.getTestMap().put("b", "2");
		hm.put("b", "2");
		System.out.println(ic);
//		{a=1}
//		Performing Deep Copy for Object initialization
//		ImmutableClass(id=1, name=aa, testMap={a=1})
		
	}
}
