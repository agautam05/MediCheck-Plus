package com.medicheck.dto.medicine;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class ScanResponse {
    private String brandName;
    private String genericName;
    private String category;
    private String indication;
    private DosageDto dosage;
    private java.util.List<String> sideEffects;
    private java.util.List<String> warnings;
    private boolean prescriptionRequired;
    private double confidence;
    private String error;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class DosageDto {
        private String adult;
        private String child;
    }
}