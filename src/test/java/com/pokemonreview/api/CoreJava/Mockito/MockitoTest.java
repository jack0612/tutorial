package com.pokemonreview.api.CoreJava.Mockito;

//https://www.vogella.com/tutorials/Mockito/article.html
//https://www.softwaretestinghelp.com/mockito-matchers/
//softwaretestinghelp.com/mockito-inteview-questions/


//https://www.studytonight.com/java-examples/spy-in-mockito
//Spies are known as partial mocks. 
//Mocks are created from the Class of a type,
//whereas spies are created from the actual instances of the class. 
//All the normal methods 
//of the class are not executed in the case of mocks. Spies, on the other hand, 
//will use the original behavior of the methods. 
//The result of the execution of a method is also reflected on the spy object.
//Argument Matchers
//#1) any() – Accepts any object (including null).
//			when(mockedIntList.get(any())).thenReturn(3);
//#2) any(java language class)
//			when(mockedIntList.get(any(Integer.class))).thenReturn(3);
//#3) anyBoolean(), anyByte(), anyInt(), anyString(), anyDouble(), anyFloat(), anyList() and many more – All of these accept any object of the corresponding data type as well as null values.
//			when(mockedIntList.get(anyInt())).thenReturn(3);
//#4) Specific arguments
//			when(mockedIntList.get(1)).thenReturn(3);
//Verification Matchers
//Mockito.inOrder(mockedIntList);
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.mockito.Mockito.doReturn;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.*;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

@ExtendWith(MockitoExtension.class)
public class MockitoTest {
	@Spy
	List<String> spy = new LinkedList<>();
	@Spy
	ArrayList<Integer> spyArrList = new ArrayList<>();

	@Captor
	private ArgumentCaptor<List<String>> captor;

	@Test
	public void testForIOException() throws IOException {
		// create an configure mock
		OutputStream mockStream = mock(OutputStream.class);
		doThrow(new IOException()).when(mockStream).close();

		// use mock
		OutputStreamWriter streamWriter = new OutputStreamWriter(mockStream);

		assertThrows(IOException.class, () -> streamWriter.close());
	}

	@Test
	void testLinkedListSpyCorrect() {

		// when(spy.get(0)).thenReturn("foo");
		// would not work as the delegate it called so spy.get(0)
		// throws IndexOutOfBoundsException (list is still empty)

		// you have to use doReturn() for stubbing
		doReturn("foo").when(spy).get(0);
		System.out.println(spy.get(0));
		assertEquals("foo", spy.get(0));
	}

	@Test
	public void test() {
		spyArrList.add(5);
		spyArrList.add(10);
		spyArrList.add(15);

		Mockito.verify(spyArrList).add(5);
		Mockito.verify(spyArrList).add(10);
		Mockito.verify(spyArrList).add(15);

		assertEquals(3, spyArrList.size());
	}

	@Test
	public final void shouldContainCertainListItem(@Mock List<String> mockedList) {
		var asList = Arrays.asList("someElement_test", "someElement");
		mockedList.addAll(asList);

		verify(mockedList).addAll(captor.capture());
		List<String> capturedArgument = captor.getValue();
		//assertThat(capturedArgument, hasItem("someElement"));
		System.out.println(capturedArgument);
	}
}
