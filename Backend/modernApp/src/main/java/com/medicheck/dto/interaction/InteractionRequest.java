package com.medicheck.dto.interaction;

import jakarta.validation.constraints.NotEmpty;
import lombok.Data;

import java.util.List;

@Data
public class InteractionRequest {
    @NotEmpty(message = "At least one medicine name is required")
    private List<String> medicineNames;

    private String lang = "hi";
}