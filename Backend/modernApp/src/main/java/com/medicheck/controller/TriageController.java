package com.medicheck.controller;

import com.medicheck.dto.common.ApiResponse;
import com.medicheck.dto.triage.TriageRequest;
import com.medicheck.dto.triage.TriageResponse;
import com.medicheck.service.TriageService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/triage")
@RequiredArgsConstructor
public class TriageController {

    private final TriageService triageService;

    @PostMapping
    public ResponseEntity<ApiResponse<TriageResponse>> triageSymptoms(
            @Valid @RequestBody TriageRequest request) {

        TriageResponse response = triageService.triageSymptoms(
                request.getSymptoms(), request.getAge(), request.getLang());

        return ResponseEntity.ok(ApiResponse.success(response));
    }

    @PostMapping("/followup")
    public ResponseEntity<ApiResponse<TriageResponse>> triageFollowUp(
            @RequestParam String symptoms,
            @RequestParam String answer,
            @RequestParam(defaultValue = "hi") String lang) {

        TriageResponse response = triageService.triageFollowUp(symptoms, answer, lang);
        return ResponseEntity.ok(ApiResponse.success(response));
    }
}