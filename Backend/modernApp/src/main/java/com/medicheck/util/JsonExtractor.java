package com.medicheck.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.medicheck.exception.AISafetyException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JsonExtractor {

    private final ObjectMapper objectMapper;

    public <T> T extractJson(String jsonString, Class<T> targetClass) {
        try {
            return objectMapper.readValue(jsonString, targetClass);
        } catch (JsonProcessingException e) {
            // Try to find JSON in the response (Claude sometimes wraps in markdown)
            String extracted = extractJsonFromMarkdown(jsonString);
            if (extracted != null) {
                try {
                    return objectMapper.readValue(extracted, targetClass);
                } catch (JsonProcessingException ex) {
                    throw new AISafetyException("Failed to parse AI response as valid JSON", ex);
                }
            }
            throw new AISafetyException("Failed to parse AI response as valid JSON", e);
        }
    }

    public String extractJsonFromMarkdown(String text) {
        // Extract JSON from ```json ... ``` blocks
        int start = text.indexOf("```json");
        if (start != -1) {
            start += 7; // length of ```json
            int end = text.indexOf("```", start);
            if (end != -1) {
                return text.substring(start, end).trim();
            }
        }
        // Try to find JSON object directly
        int braceStart = text.indexOf('{');
        int braceEnd = text.lastIndexOf('}');
        if (braceStart != -1 && braceEnd != -1 && braceEnd > braceStart) {
            return text.substring(braceStart, braceEnd + 1);
        }
        return null;
    }

    public boolean hasError(JsonNode node) {
        return node.has("error") && !node.get("error").isNull();
    }

    public String getError(JsonNode node) {
        return node.has("error") ? node.get("error").asText() : null;
    }
}