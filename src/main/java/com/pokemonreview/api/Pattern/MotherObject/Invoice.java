package com.pokemonreview.api.Pattern.MotherObject;
//https://github.com/thombergs/code-examples/blob/master/patterns/src/test/java/io/reflectoring/objectmother/ObjectMotherClient.java
import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
class Invoice {

	private long id;

	private Address address;

	private List<InvoiceItem> items;

}
