package com.medicheck.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.medicheck.client.OpenRouterClient;
import com.medicheck.exception.AISafetyException;
import com.medicheck.util.PromptBuilder;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class AIService {

    private final OpenRouterClient openRouterClient;
    private final PromptBuilder promptBuilder;
    private final ObjectMapper objectMapper;

    public String scanMedicine(String base64Image, String lang) {
        String systemPrompt = promptBuilder.buildMedicineScanPrompt(lang);
        String userMessage = "Please analyze this medicine image. Image (base64): " + base64Image;
        return callAI(systemPrompt, userMessage);
    }

    public String triageSymptoms(String symptoms, Integer age, String lang) {
        String systemPrompt = promptBuilder.buildTriagePrompt(lang);
        StringBuilder userMessage = new StringBuilder("Symptoms: " + symptoms);
        if (age != null) {
            userMessage.append("\nAge: ").append(age);
        }
        return callAI(systemPrompt, userMessage.toString());
    }

    public String triageFollowUp(String symptoms, String followUpAnswer, String lang) {
        String systemPrompt = promptBuilder.buildTriagePrompt(lang);
        String userMessage = "Original symptoms: " + symptoms + "\nFollow-up answer: " + followUpAnswer;
        return callAI(systemPrompt, userMessage);
    }

    public String checkInteraction(java.util.List<String> medicineNames, String lang) {
        String systemPrompt = promptBuilder.buildInteractionPrompt(lang);
        String userMessage = "Check interactions for these medicines: " + String.join(", ", medicineNames);
        return callAI(systemPrompt, userMessage);
    }

    private String callAI(String systemPrompt, String userMessage) {
        try {
            return openRouterClient.sendMessage(systemPrompt, userMessage);
        } catch (Exception e) {
            log.error("AI service call failed", e);
            throw new AISafetyException("AI service call failed: " + e.getMessage());
        }
    }
}