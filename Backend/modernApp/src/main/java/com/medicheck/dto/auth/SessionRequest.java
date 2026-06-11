package com.medicheck.dto.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class SessionRequest {
    private String language;
    private String deviceInfo;
}