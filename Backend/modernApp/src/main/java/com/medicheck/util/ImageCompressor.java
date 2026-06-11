package com.medicheck.util;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.util.Base64;

@Component
@Slf4j
public class ImageCompressor {

    private static final int MAX_IMAGE_DIMENSION = 800;
    private static final int JPEG_QUALITY = 70;

    /**
     * Validates and returns image metadata. In production, this would use
     * ImageIO or similar to resize the image. For now, validates the base64.
     */
    public String compress(String base64Image) {
        if (base64Image == null || base64Image.isEmpty()) {
            throw new IllegalArgumentException("Image data cannot be empty");
        }

        // Remove data URL prefix if present
        String cleanImage = base64Image;
        if (cleanImage.contains(",")) {
            cleanImage = cleanImage.substring(cleanImage.indexOf(",") + 1);
        }

        // Validate base64
        try {
            byte[] decoded = Base64.getDecoder().decode(cleanImage);
            if (decoded.length > 2_097_152) { // 2 MB
                throw new IllegalArgumentException("Image size exceeds maximum allowed size of 2 MB");
            }
        } catch (IllegalArgumentException e) {
            if (e.getMessage() != null && e.getMessage().contains("Image size")) {
                throw e;
            }
            throw new IllegalArgumentException("Invalid base64 image data", e);
        }

        return cleanImage;
    }

    public long getImageSizeBytes(String base64Image) {
        try {
            byte[] decoded = Base64.getDecoder().decode(base64Image);
            return decoded.length;
        } catch (Exception e) {
            return 0;
        }
    }
}