package com.medicheck.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.medicheck.dto.interaction.InteractionResponse;
import com.medicheck.exception.AISafetyException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class InteractionService {

    private final AIService aiService;
    private final ObjectMapper objectMapper;

    public InteractionResponse checkInteraction(List<String> medicineNames, String lang) {
        String aiResponse = aiService.checkInteraction(medicineNames, lang);
        return parseInteractionResponse(aiResponse);
    }

    private InteractionResponse parseInteractionResponse(String aiResponse) {
        try {
            JsonNode node = objectMapper.readTree(aiResponse);
            InteractionResponse.InteractionResponseBuilder builder = InteractionResponse.builder();

            if (node.has("overall_safety")) {
                builder.overallSafety(node.get("overall_safety").asText());
            }

            if (node.has("interactions")) {
                List<InteractionResponse.InteractionItem> items = new ArrayList<>();
                for (JsonNode itemNode : node.get("interactions")) {
                    InteractionResponse.InteractionItem item = parseInteractionItem(itemNode);
                    if (item != null) {
                        items.add(item);
                    }
                }
                builder.interactions(items);
            }

            return builder.build();
        } catch (Exception e) {
            throw new AISafetyException("Failed to parse interaction response", e);
        }
    }

    private InteractionResponse.InteractionItem parseInteractionItem(JsonNode node) {
        if (node == null) return null;

        InteractionResponse.InteractionItem.InteractionItemBuilder builder = InteractionResponse.InteractionItem.builder();

        if (node.has("severity")) builder.severity(node.get("severity").asText());
        if (node.has("description")) builder.description(node.get("description").asText());
        if (node.has("recommendation")) builder.recommendation(node.get("recommendation").asText());

        if (node.has("drugs")) {
            List<String> drugs = new ArrayList<>();
            node.get("drugs").forEach(d -> drugs.add(d.asText()));
            builder.drugs(drugs);
        }

        return builder.build();
    }
}