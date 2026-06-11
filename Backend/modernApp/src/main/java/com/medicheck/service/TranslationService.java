package com.medicheck.service;

import com.medicheck.client.TranslationClient;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class TranslationService {

    private final TranslationClient translationClient;

    public String translate(String text, String targetLanguage) {
        if (targetLanguage == null || "en".equalsIgnoreCase(targetLanguage)) {
            return text;
        }
        return translationClient.translate(text, targetLanguage);
    }
}