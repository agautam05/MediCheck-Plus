package com.medicheck.util;

import com.medicheck.constants.PromptConstants;
import org.springframework.stereotype.Component;

@Component
public class PromptBuilder {

    public String buildMedicineScanPrompt(String lang) {
        return PromptConstants.MEDICINE_SCAN_PROMPT
                .replace("the language specified by the lang parameter", lang != null ? lang : "Hindi");
    }

    public String buildTriagePrompt(String lang) {
        return PromptConstants.TRIAGE_PROMPT
                .replace("the user's language", lang != null ? lang : "Hindi");
    }

    public String buildInteractionPrompt(String lang) {
        return PromptConstants.INTERACTION_PROMPT;
    }

    public String buildSystemPromptWithDisclaimer(String basePrompt) {
        return basePrompt + "\n\nImportant: " + PromptConstants.DISCLAIMER;
    }
}