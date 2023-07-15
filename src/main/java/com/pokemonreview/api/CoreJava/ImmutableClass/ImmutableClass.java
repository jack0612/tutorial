package com.pokemonreview.api.CoreJava.ImmutableClass;

import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.springframework.boot.SpringApplication;

import com.pokemonreview.api.ApiApplication;

import lombok.ToString;

@ToString
public final class ImmutableClass implements Cloneable{
	// fields of the FinalClassExample class
	private final int id;

	private final String name;

	final private HashMap<String, String> testMap;

	public int getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	// Getter function for mutable objects

	public Map<String, String> getTestMap() {
		return   (Map<String, String>) testMap.clone();
	}

	// Constructor method performing deep copy

	public ImmutableClass(int i, String n, HashMap<String, String> hm) {
		System.out.println("Performing Deep Copy for Object initialization");

		// "this" keyword refers to the current object
		this.id = i;
		this.name = n;

		HashMap<String, String> tempMap = new HashMap<String, String>();
		String key;
		Iterator<String> it = hm.keySet().iterator();
		while (it.hasNext()) {
			key = it.next();
			tempMap.put(key, hm.get(key));
		}
		this.testMap = (HashMap<String, String>) (tempMap);
	}
	
//	public Object clone() throws CloneNotSupportedException
//    {
//		return org.apache.commons.lang3.SerializationUtils.clone();
//        // Assign the shallow copy to
//        // new reference variable t
//		ImmutableClass t = (ImmutableClass)super.clone();
//		HashMap<String, String> tempMap = new HashMap<String, String>();
//		String key;
//		Iterator<String> it = t.testMap.keySet().iterator();
//		while (it.hasNext()) {
//			key = it.next();
//			tempMap.put(key, t.testMap.get(key));
//		}
//		t.setTestMap(tempMap);
//        return t;
//    }
	

}
