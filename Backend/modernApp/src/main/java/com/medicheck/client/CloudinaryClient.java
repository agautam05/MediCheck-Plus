package com.medicheck.client;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.util.Base64;
import java.util.Map;
import java.util.UUID;

@Component
@RequiredArgsConstructor
@Slf4j
public class CloudinaryClient {

    private final Cloudinary cloudinary;

    public String uploadImage(String base64Image) {
        try {
            byte[] imageBytes = Base64.getDecoder().decode(base64Image);
            String publicId = "scans/" + UUID.randomUUID().toString();

            Map<String, Object> params = ObjectUtils.asMap(
                    "public_id", publicId,
                    "resource_type", "image",
                    "folder", "medicheck"
            );

            Map<?, ?> uploadResult = cloudinary.uploader().upload(imageBytes, params);
            String url = (String) uploadResult.get("secure_url");
            log.info("Image uploaded to Cloudinary: {}", url);
            return url;
        } catch (Exception e) {
            log.error("Failed to upload image to Cloudinary", e);
            throw new RuntimeException("Failed to upload image to Cloudinary", e);
        }
    }

    public void deleteImage(String publicId) {
        try {
            Map<?, ?> result = cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
            log.info("Image deleted from Cloudinary: {} - {}", publicId, result.get("result"));
        } catch (Exception e) {
            log.error("Failed to delete image from Cloudinary: {}", publicId, e);
        }
    }
}