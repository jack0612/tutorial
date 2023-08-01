package com.pokemonreview.api.CoreJava.Singleton;

import static org.junit.Assert.assertThrows;

import org.junit.jupiter.api.Test;

public class SingletonTest_Clone {
	@Test
	void preventClone() {
		Singleton instance1 = Singleton.instance;
		// Singleton instance2 = (Singleton)instance1.clone();
		assertThrows(CloneNotSupportedException.class, () -> instance1.clone());
		System.out.println("instance1 hashCode:- " + instance1.hashCode());
		 
	}
}

class SuperClass implements Cloneable {
	int i = 10;

	@Override
	protected Object clone() throws CloneNotSupportedException {
		return super.clone();
	}
}

// Singleton class
class Singleton extends SuperClass {
	// public instance initialized when loading the class
	public final static Singleton instance = new Singleton();

	private Singleton() {
		// private constructor
	}

	@Override
	protected Object clone() throws CloneNotSupportedException {
		//return instance;
		throw new CloneNotSupportedException();
	}
}