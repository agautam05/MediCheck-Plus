package com.medicheck.validator;

import com.medicheck.constants.ApiConstants;
import org.springframework.stereotype.Component;

@Component
public class TriageValidator {

    public void validate(String symptoms) {
        if (symptoms == null || symptoms.trim().isEmpty()) {
            throw new IllegalArgumentException("Symptoms description cannot be empty");
        }
        if (symptoms.length() > ApiConstants.MAX_TEXT_LENGTH) {
            throw new IllegalArgumentException("Symptoms description exceeds maximum length of " + ApiConstants.MAX_TEXT_LENGTH + " characters");
        }
    }
}