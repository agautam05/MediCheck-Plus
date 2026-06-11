package com.medicheck.util;

import com.medicheck.constants.ApiConstants;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class ValidationUtil {

    private static final List<String> ALLOWED_IMAGE_TYPES = Arrays.asList("image/jpeg", "image/png");

    public boolean isValidImageType(String mimeType) {
        return ALLOWED_IMAGE_TYPES.contains(mimeType);
    }

    public boolean isValidImageSize(long sizeBytes) {
        return sizeBytes <= ApiConstants.MAX_IMAGE_SIZE_BYTES;
    }

    public boolean isValidTextLength(String text) {
        return text == null || text.length() <= ApiConstants.MAX_TEXT_LENGTH;
    }

    public boolean isValidLanguage(String lang) {
        return lang != null && lang.matches("^(hi|en|ta|te|bn|mr|gu)$");
    }
}