package com.pokemonreview.api.CoreJava.Singleton;

import static org.junit.Assert.assertThrows;

import java.lang.reflect.Constructor;

import org.junit.jupiter.api.Test;

public class SignletonTest_Reflection {
	@Test
	void test() {
		Singleton3 instance1 = Singleton3.instance;
		Singleton3 instance2 = null;
		try {
			Constructor[] constructors = Singleton3.class.getDeclaredConstructors();
			for (Constructor constructor : constructors) {
				// Below code will destroy the singleton
				// pattern
				constructor.setAccessible(true);
				System.out.println("---constructor"+ constructor+","+instance2);
				instance2 = (Singleton3) constructor.newInstance();
				break;
			}
		}

		catch (Exception e) {
			e.printStackTrace();
		}

		System.out.println("instance1.hashCode():- " + instance1.hashCode());
		System.out.println("instance2.hashCode():- " + instance2.hashCode());
	}
}

class Singleton3 {
	// public instance initialized when loading the class
	public final static   Singleton3 instance = new Singleton3();

	private Singleton3 Singleton3() throws RuntimeException {
		System.out.println("--------throw exception");
		throw new RuntimeException();
		//return instance;
	}
}