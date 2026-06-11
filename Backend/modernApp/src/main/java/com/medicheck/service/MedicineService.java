package com.medicheck.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.medicheck.dto.medicine.ScanResponse;
import com.medicheck.entity.ChatSession;
import com.medicheck.entity.MedicineScan;
import com.medicheck.exception.AISafetyException;
import com.medicheck.mapper.MedicineMapper;
import com.medicheck.repository.MedicineScanRepository;
import com.medicheck.util.ImageCompressor;
import com.medicheck.util.JsonExtractor;
import com.medicheck.validator.ImageValidator;
import com.medicheck.validator.MedicineValidator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class MedicineService {

    private final AIService aiService;
    private final MedicineScanRepository medicineScanRepository;
    private final ImageCompressor imageCompressor;
    private final JsonExtractor jsonExtractor;
    private final ObjectMapper objectMapper;
    private final MedicineMapper medicineMapper;
    private final ImageValidator imageValidator;
    private final MedicineValidator medicineValidator;

    @Transactional
    public ScanResponse scanMedicine(String base64Image, String lang, ChatSession session) {
        // Validate
        imageValidator.validate(base64Image);
        medicineValidator.validateImage(base64Image);

        // Compress
        String compressedImage = imageCompressor.compress(base64Image);

        // Call AI
        String aiResponse = aiService.scanMedicine(compressedImage, lang);

        // Parse response
        JsonNode responseNode;
        try {
            responseNode = objectMapper.readTree(aiResponse);
            if (jsonExtractor.hasError(responseNode)) {
                String error = jsonExtractor.getError(responseNode);
                if ("NOT_A_MEDICINE".equals(error)) {
                    return ScanResponse.builder()
                            .error("NOT_A_MEDICINE")
                            .build();
                }
            }
        } catch (Exception e) {
            throw new AISafetyException("Failed to parse AI response", e);
        }

        // Extract and map response
        ScanResponse scanResponse = parseScanResponse(responseNode);

        // Save to database
        MedicineScan scan = MedicineScan.builder()
                .session(session)
                .brandName(scanResponse.getBrandName())
                .genericName(scanResponse.getGenericName())
                .confidence(BigDecimal.valueOf(scanResponse.getConfidence()))
                .aiResponse(aiResponse)
                .build();
        medicineScanRepository.save(scan);

        return scanResponse;
    }

    private ScanResponse parseScanResponse(JsonNode node) {
        ScanResponse.ScanResponseBuilder builder = ScanResponse.builder();

        if (node.has("brand_name")) builder.brandName(node.get("brand_name").asText());
        if (node.has("generic_name")) builder.genericName(node.get("generic_name").asText());
        if (node.has("category")) builder.category(node.get("category").asText());
        if (node.has("indication")) builder.indication(node.get("indication").asText());
        if (node.has("side_effects")) {
            List<String> sideEffects = objectMapper.convertValue(node.get("side_effects"),
                    objectMapper.getTypeFactory().constructCollectionType(List.class, String.class));
            builder.sideEffects(sideEffects);
        }
        if (node.has("warnings")) {
            List<String> warnings = objectMapper.convertValue(node.get("warnings"),
                    objectMapper.getTypeFactory().constructCollectionType(List.class, String.class));
            builder.warnings(warnings);
        }
        if (node.has("prescription_required")) builder.prescriptionRequired(node.get("prescription_required").asBoolean());
        if (node.has("confidence")) builder.confidence(node.get("confidence").asDouble());
        if (node.has("dosage")) {
            JsonNode dosage = node.get("dosage");
            ScanResponse.DosageDto.DosageDtoBuilder dosageBuilder = ScanResponse.DosageDto.builder();
            if (dosage.has("adult")) dosageBuilder.adult(dosage.get("adult").asText());
            if (dosage.has("child")) dosageBuilder.child(dosage.get("child").asText());
            builder.dosage(dosageBuilder.build());
        }

        return builder.build();
    }

    public List<MedicineScan> getScanHistory(ChatSession session) {
        return medicineScanRepository.findBySessionIdOrderByCreatedAtDesc(session.getId());
    }
}