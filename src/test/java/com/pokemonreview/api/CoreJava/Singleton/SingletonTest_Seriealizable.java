package com.pokemonreview.api.CoreJava.Singleton;


import java.io.*;

import org.junit.jupiter.api.Test;

public class SingletonTest_Seriealizable {
	@Test
	void test(){
		try {
            Singleton2 instance1 = Singleton2.instance;
            ObjectOutput out = new ObjectOutputStream(new FileOutputStream("file.text"));
           
            out.writeObject(instance1);
            out.close();
 
            // deserialize from file to object
            ObjectInput in = new ObjectInputStream(new FileInputStream("file.text"));
            Singleton2 instance2
                = (Singleton2)in.readObject();
            in.close();
 
            System.out.println("instance1 hashCode:- "
                               + instance1.hashCode());
            System.out.println("instance2 hashCode:- "
                               + instance2.hashCode());
        }
 
        catch (Exception e) {
            e.printStackTrace();
        }
    }
}

class Singleton2 implements Serializable {
	 
    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	// public instance initialized when loading the class
    public static Singleton2 instance = new Singleton2();
 
    private Singleton2()  
    {
       
    }
 
    // implement readResolve method
    protected Object readResolve() { return instance; }
}