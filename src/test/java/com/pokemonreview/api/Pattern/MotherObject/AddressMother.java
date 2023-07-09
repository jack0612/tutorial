package com.pokemonreview.api.Pattern.MotherObject;
//https://github.com/thombergs/code-examples/blob/master/patterns/src/test/java/io/reflectoring/objectmother/AddressMother.java
class AddressMother {

	static Address.AddressBuilder complete() {
		return Address.builder()
						.street("Hollywood Boulevard")
						.houseNumber("4711")
						.zipCode("90210")
						.country("US")
						.city("Los Angeles");
	}

	static Address.AddressBuilder abroad() {
		return complete()
						.country("DE");
	}

}
