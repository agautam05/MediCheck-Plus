package com.medicheck.service;

import com.medicheck.client.CloudinaryClient;
import com.medicheck.util.ImageCompressor;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class ImageService {

    private final CloudinaryClient cloudinaryClient;
    private final ImageCompressor imageCompressor;

    public String uploadImage(String base64Image) {
        String compressed = imageCompressor.compress(base64Image);
        return cloudinaryClient.uploadImage(compressed);
    }

    public void deleteImage(String publicId) {
        cloudinaryClient.deleteImage(publicId);
    }
}