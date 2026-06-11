package com.medicheck.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.medicheck.dto.triage.TriageResponse;
import com.medicheck.exception.AISafetyException;
import com.medicheck.validator.TriageValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TriageService {

    private final AIService aiService;
    private final ObjectMapper objectMapper;
    private final TriageValidator triageValidator;

    public TriageResponse triageSymptoms(String symptoms, Integer age, String lang) {
        triageValidator.validate(symptoms);

        String aiResponse = aiService.triageSymptoms(symptoms, age, lang);
        return parseTriageResponse(aiResponse);
    }

    public TriageResponse triageFollowUp(String symptoms, String followUpAnswer, String lang) {
        String aiResponse = aiService.triageFollowUp(symptoms, followUpAnswer, lang);
        return parseTriageResponse(aiResponse);
    }

    private TriageResponse parseTriageResponse(String aiResponse) {
        try {
            JsonNode node = objectMapper.readTree(aiResponse);
            TriageResponse.TriageResponseBuilder builder = TriageResponse.builder();

            if (node.has("level")) builder.level(node.get("level").asText());
            if (node.has("summary")) builder.summary(node.get("summary").asText());
            if (node.has("clinic_reason")) builder.clinicReason(node.get("clinic_reason").asText());
            if (node.has("follow_up_question")) builder.followUpQuestion(node.get("follow_up_question").asText());

            if (node.has("home_advice")) {
                List<String> homeAdvice = new ArrayList<>();
                node.get("home_advice").forEach(item -> homeAdvice.add(item.asText()));
                builder.homeAdvice(homeAdvice);
            }

            if (node.has("emergency_signs")) {
                List<String> emergencySigns = new ArrayList<>();
                node.get("emergency_signs").forEach(item -> emergencySigns.add(item.asText()));
                builder.emergencySigns(emergencySigns);
            }

            return builder.build();
        } catch (Exception e) {
            throw new AISafetyException("Failed to parse triage response", e);
        }
    }
}