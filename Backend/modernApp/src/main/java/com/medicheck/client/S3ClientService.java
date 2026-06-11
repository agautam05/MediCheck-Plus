package com.medicheck.client;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.io.ByteArrayInputStream;
import java.util.Base64;
import java.util.UUID;

@Component
@RequiredArgsConstructor
@Slf4j
public class S3ClientService {

    private final AmazonS3 amazonS3;

    @Value("${medicheck.s3.bucket:medicheck-images-dev}")
    private String bucketName;

    public String uploadImage(String base64Image) {
        try {
            byte[] imageBytes = Base64.getDecoder().decode(base64Image);
            String key = "scans/" + UUID.randomUUID() + ".jpg";

            ObjectMetadata metadata = new ObjectMetadata();
            metadata.setContentLength(imageBytes.length);
            metadata.setContentType("image/jpeg");

            amazonS3.putObject(bucketName, key, new ByteArrayInputStream(imageBytes), metadata);
            log.info("Image uploaded to S3: {}", key);
            return key;
        } catch (Exception e) {
            log.error("Failed to upload image to S3", e);
            throw new RuntimeException("Failed to upload image", e);
        }
    }

    public void deleteImage(String imageKey) {
        try {
            amazonS3.deleteObject(bucketName, imageKey);
            log.info("Image deleted from S3: {}", imageKey);
        } catch (Exception e) {
            log.error("Failed to delete image from S3: {}", imageKey, e);
        }
    }
}