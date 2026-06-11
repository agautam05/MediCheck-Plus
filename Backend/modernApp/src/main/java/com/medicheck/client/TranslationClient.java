package com.medicheck.client;

import com.medicheck.exception.ClaudeApiException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Component
@Slf4j
public class TranslationClient {

    private final HttpClient httpClient;

    public TranslationClient() {
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(10))
                .build();
    }

    public String translate(String text, String targetLanguage) {
        try {
            String requestBody = String.format("""
                    {
                      "q": "%s",
                      "source": "auto",
                      "target": "%s",
                      "format": "text"
                    }
                    """, escapeJson(text), targetLanguage);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("https://libretranslate.de/translate"))
                    .header("Content-Type", "application/json")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .timeout(Duration.ofSeconds(15))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() == 200) {
                return response.body();
            }

            log.warn("Translation API returned status: {}", response.statusCode());
            return text; // fallback to original text

        } catch (Exception e) {
            log.error("Translation failed, returning original text", e);
            return text;
        }
    }

    private String escapeJson(String text) {
        return text.replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r");
    }
}