package com.medicheck.dto.medicine;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MedicineResultDto {
    private String brandName;
    private String genericName;
    private String category;
    private String indication;
    private Map<String, String> dosage;
    private List<String> sideEffects;
    private List<String> warnings;
    private boolean prescriptionRequired;
    private double confidence;
    private String error;
}