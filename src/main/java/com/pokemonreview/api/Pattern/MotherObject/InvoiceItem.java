package com.pokemonreview.api.Pattern.MotherObject;
//https://github.com/thombergs/code-examples/blob/master/patterns/src/test/java/io/reflectoring/objectmother/ObjectMotherClient.java
import lombok.Builder;
import lombok.Data;

@Data
@Builder
class InvoiceItem {

	private long amount;

	private long price;

	private String productName;

	private double taxFactor;

}
