package com.pokemonreview.api.Pattern.MotherObject;
//https://github.com/thombergs/code-examples/blob/master/patterns/src/test/java/io/reflectoring/objectmother/InvoiceItemMother.java
class InvoiceItemMother {

	static InvoiceItem.InvoiceItemBuilder complete() {
		return InvoiceItem.builder()
						.amount(1)
						.price(1234L)
						.productName("The Hitchhiker's Guide to the Galaxy")
						.taxFactor(0.19d);
	}

	static InvoiceItem.InvoiceItemBuilder withNegativePrice() {
		return InvoiceItem.builder()
						.amount(1)
						.price(-1234L)
						.productName("The Hitchhiker's Guide to the Galaxy")
						.taxFactor(0.19d);
	}

}