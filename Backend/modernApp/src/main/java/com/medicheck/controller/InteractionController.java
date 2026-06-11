package com.medicheck.controller;

import com.medicheck.dto.common.ApiResponse;
import com.medicheck.dto.interaction.InteractionRequest;
import com.medicheck.dto.interaction.InteractionResponse;
import com.medicheck.service.InteractionService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/interaction")
@RequiredArgsConstructor
public class InteractionController {

    private final InteractionService interactionService;

    @PostMapping("/check")
    public ResponseEntity<ApiResponse<InteractionResponse>> checkInteraction(
            @Valid @RequestBody InteractionRequest request) {

        InteractionResponse response = interactionService.checkInteraction(
                request.getMedicineNames(), request.getLang());

        return ResponseEntity.ok(ApiResponse.success(response));
    }
}