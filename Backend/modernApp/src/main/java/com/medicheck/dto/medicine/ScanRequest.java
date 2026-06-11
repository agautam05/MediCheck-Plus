package com.medicheck.dto.medicine;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class ScanRequest {
    @NotBlank(message = "Image data is required")
    private String image;

    private String lang = "hi";
}