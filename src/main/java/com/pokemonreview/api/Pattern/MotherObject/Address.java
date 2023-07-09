package com.pokemonreview.api.Pattern.MotherObject;
//https://github.com/thombergs/code-examples/blob/master/patterns/src/test/java/io/reflectoring/objectmother/ObjectMotherClient.java
import lombok.Builder;
import lombok.Data;

@Data
@Builder
class Address {

	private String street;

	private String houseNumber;

	private String zipCode;

	private String city;

	private String country;
}
