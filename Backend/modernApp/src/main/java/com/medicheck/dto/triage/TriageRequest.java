package com.medicheck.dto.triage;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class TriageRequest {
    @NotBlank(message = "Symptoms description is required")
    private String symptoms;

    private Integer age;
    private String lang = "hi";
}