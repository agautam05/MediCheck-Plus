package com.medicheck.client;

import com.medicheck.exception.ClaudeApiException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

@Component
@Slf4j
public class ClaudeClient {

    private final HttpClient httpClient;
    private final String apiKey;
    private final String model;
    private final int maxTokens;
    private final String baseUrl;

    public ClaudeClient(@Value("${medicheck.anthropic.api-key}") String apiKey,
                        @Value("${medicheck.anthropic.model}") String model,
                        @Value("${medicheck.anthropic.max-tokens:1024}") int maxTokens,
                        @Value("${medicheck.anthropic.base-url}") String baseUrl) {
        this.apiKey = apiKey;
        this.model = model;
        this.maxTokens = maxTokens;
        this.baseUrl = baseUrl;
        this.httpClient = HttpClient.newBuilder()
                .connectTimeout(Duration.ofSeconds(30))
                .build();
    }

    public String sendMessage(String systemPrompt, String userMessage) {
        return sendMessage(systemPrompt, userMessage, false);
    }

    public String sendMessage(String systemPrompt, String userMessage, boolean stream) {
        try {
            String requestBody = buildRequestBody(systemPrompt, userMessage, stream);

            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create(baseUrl))
                    .header("Content-Type", "application/json")
                    .header("x-api-key", apiKey)
                    .header("anthropic-version", "2023-06-01")
                    .POST(HttpRequest.BodyPublishers.ofString(requestBody))
                    .timeout(Duration.ofSeconds(60))
                    .build();

            HttpResponse<String> response = httpClient.send(request, HttpResponse.BodyHandlers.ofString());

            if (response.statusCode() != 200) {
                log.error("Claude API error: {} - {}", response.statusCode(), response.body());
                throw new ClaudeApiException("Claude API returned status " + response.statusCode());
            }

            return response.body();

        } catch (ClaudeApiException e) {
            throw e;
        } catch (Exception e) {
            log.error("Error calling Claude API", e);
            throw new ClaudeApiException("Failed to communicate with Claude API", e);
        }
    }

    private String buildRequestBody(String systemPrompt, String userMessage, boolean stream) {
        return String.format("""
                {
                  "model": "%s",
                  "max_tokens": %d,
                  "stream": %b,
                  "system": "%s",
                  "messages": [
                    {
                      "role": "user",
                      "content": "%s"
                    }
                  ]
                }
                """, model, maxTokens, stream,
                escapeJson(systemPrompt),
                escapeJson(userMessage));
    }

    private String escapeJson(String text) {
        return text.replace("\\", "\\\\")
                .replace("\"", "\\\"")
                .replace("\n", "\\n")
                .replace("\r", "\\r")
                .replace("\t", "\\t");
    }
}