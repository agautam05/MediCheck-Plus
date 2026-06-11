package com.medicheck.validator;

import com.medicheck.constants.ApiConstants;
import org.springframework.stereotype.Component;

@Component
public class MedicineValidator {

    public void validateImage(String base64Image) {
        if (base64Image == null || base64Image.trim().isEmpty()) {
            throw new IllegalArgumentException("Image data is required");
        }
        if (base64Image.length() > ApiConstants.MAX_IMAGE_SIZE_BYTES * 1.37) { // base64 overhead
            throw new IllegalArgumentException("Image data too large. Maximum size is 2 MB");
        }
    }
}