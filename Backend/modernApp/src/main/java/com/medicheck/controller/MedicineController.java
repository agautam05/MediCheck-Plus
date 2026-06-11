package com.medicheck.controller;

import com.medicheck.dto.common.ApiResponse;
import com.medicheck.dto.medicine.ScanRequest;
import com.medicheck.dto.medicine.ScanResponse;
import com.medicheck.entity.ChatSession;
import com.medicheck.service.MedicineService;
import com.medicheck.service.SessionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/medicine")
@RequiredArgsConstructor
public class MedicineController {

    private final MedicineService medicineService;
    private final SessionService sessionService;

    @PostMapping("/scan")
    public ResponseEntity<ApiResponse<ScanResponse>> scanMedicine(
            @Valid @RequestBody ScanRequest request,
            Authentication authentication) {

        String sessionToken = authentication.getName();
        ChatSession session = sessionService.getSessionByToken(sessionToken);

        ScanResponse response = medicineService.scanMedicine(request.getImage(), request.getLang(), session);

        if ("NOT_A_MEDICINE".equals(response.getError())) {
            return ResponseEntity.unprocessableEntity()
                    .body(ApiResponse.error("The uploaded image does not appear to be a medicine"));
        }

        if (response.getConfidence() < 0.5) {
            return ResponseEntity.ok(ApiResponse.success("Low confidence result - please verify with a pharmacist", response));
        }

        return ResponseEntity.ok(ApiResponse.success(response));
    }
}