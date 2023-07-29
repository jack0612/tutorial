package com.pokemonreview.api.WebClient;
//https://www.arhohuttunen.com/spring-boot-webclient-mockwebserver/

import okhttp3.mockwebserver.MockResponse;
import okhttp3.mockwebserver.MockWebServer;
import okhttp3.mockwebserver.RecordedRequest;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.boot.test.json.BasicJsonTester;
import org.springframework.boot.test.json.JsonContent;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.web.reactive.function.client.WebClient;

import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.Assert.assertEquals;
 

import java.io.IOException;
import java.io.InputStream;

@ExtendWith(MockitoExtension.class)
public class WebClientTest {
	private final BasicJsonTester json = new BasicJsonTester(this.getClass());
	private MockWebServer mockWebServer;
	private TwilioClient twilioClient;

	@BeforeEach
	void setupMockWebServer() {
		mockWebServer = new MockWebServer();

		TwilioClientProperties properties = new TwilioClientProperties();
		properties.setBaseUrl(mockWebServer.url("/").url().toString());
		properties.setAccountSid("ACd936ed6dc1504dd79530f19f57b9c008");

		twilioClient = new TwilioClient(WebClient.create(), properties);
	}

	@Test
	void makesTheCorrectRequest() throws InterruptedException {
		mockWebServer.enqueue(new MockResponse().setResponseCode(200)
				.setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
				.setBody(getJson("message-response.json")));

		twilioClient.sendSms("+123456", "+234567", "test message");

		RecordedRequest request = mockWebServer.takeRequest();

		assertEquals(request.getMethod(), "POST");
		assertEquals(request.getPath(), "/Accounts/ACd936ed6dc1504dd79530f19f57b9c008/Messages.json");
	}

	@Test
    void serializesRequest() throws InterruptedException {
        mockWebServer.enqueue(
                new MockResponse().setResponseCode(200)
                        .setHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                        .setBody(getJson("message-response.json"))
        );

        twilioClient.sendSms("+123456", "+234567", "test message");

        RecordedRequest request = mockWebServer.takeRequest();
        JsonContent<Object> body = json.from(request.getBody().readUtf8());

//        assertEquals(body.extractingJsonPathStringValue("$.from"),"+123456");
//        assertEquals(body.extractingJsonPathStringValue("$.to","+234567");
//        assertEquals(body.extractingJsonPathStringValue("$.body","test message");
        
       
    }

	private String getJson(String path) {
		try {
			InputStream jsonStream = this.getClass().getClassLoader().getResourceAsStream(path);
			assert jsonStream != null;
			return new String(jsonStream.readAllBytes());
		} catch (IOException ex) {
			throw new RuntimeException(ex);
		}
	}
}
