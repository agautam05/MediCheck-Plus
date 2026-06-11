package com.medicheck.validator;

import com.medicheck.exception.ImageProcessingException;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
public class ImageValidator {

    private static final long MAX_SIZE_BYTES = 2_097_152; // 2 MB

    public void validate(String base64Image) {
        if (base64Image == null || base64Image.isEmpty()) {
            throw new ImageProcessingException("Image data is required");
        }

        String cleanImage = base64Image;
        if (cleanImage.contains(",")) {
            cleanImage = cleanImage.substring(cleanImage.indexOf(",") + 1);
        }

        try {
            byte[] decoded = Base64.getDecoder().decode(cleanImage);
            if (decoded.length > MAX_SIZE_BYTES) {
                throw new ImageProcessingException(
                        "Image size exceeds maximum allowed size of 2 MB. Current size: " +
                                (decoded.length / (1024 * 1024)) + " MB"
                );
            }
        } catch (IllegalArgumentException e) {
            throw new ImageProcessingException("Invalid base64 encoded image data");
        }
    }
}