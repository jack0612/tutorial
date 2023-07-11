package com.pokemonreview.api.CoreJava.Singleton;

import java.io.Serializable;

public class Singleton_DoubleCheckedLocking implements Cloneable, Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private static volatile Singleton_DoubleCheckedLocking instance;

	public static Singleton_DoubleCheckedLocking getInstance() {
		if (instance == null) {
			synchronized (Singleton_DoubleCheckedLocking.class) {
				if (instance == null) {
					instance = new Singleton_DoubleCheckedLocking();
				}
			}
		}
		return instance;
	}

	//prevent reflection
	private Singleton_DoubleCheckedLocking() {
		throw new RuntimeException();
	}

	//prevent clone
	@Override
	protected Object clone() throws CloneNotSupportedException {
		throw new CloneNotSupportedException();
	}

	//prevent deserialization
	// implement readResolve method
	protected Object readResolve() {
		return instance;
	}
}
