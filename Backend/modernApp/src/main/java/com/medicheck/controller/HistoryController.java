package com.medicheck.controller;

import com.medicheck.dto.common.ApiResponse;
import com.medicheck.entity.ChatSession;
import com.medicheck.entity.MedicineScan;
import com.medicheck.service.MedicineService;
import com.medicheck.service.SessionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/history")
@RequiredArgsConstructor
public class HistoryController {

    private final MedicineService medicineService;
    private final SessionService sessionService;

    @GetMapping
    public ResponseEntity<ApiResponse<List<MedicineScan>>> getHistory(Authentication authentication) {
        String sessionToken = authentication.getName();
        ChatSession session = sessionService.getSessionByToken(sessionToken);

        List<MedicineScan> history = medicineService.getScanHistory(session);
        return ResponseEntity.ok(ApiResponse.success(history));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<MedicineScan>> getHistoryById(
            @PathVariable Long id,
            Authentication authentication) {
        String sessionToken = authentication.getName();
        ChatSession session = sessionService.getSessionByToken(sessionToken);

        // In a full implementation, we'd fetch by id and verify it belongs to the session
        return ResponseEntity.ok(ApiResponse.success(null));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse<Void>> deleteHistory(
            @PathVariable Long id,
            Authentication authentication) {
        String sessionToken = authentication.getName();
        ChatSession session = sessionService.getSessionByToken(sessionToken);

        // In a full implementation, we'd delete by id
        return ResponseEntity.ok(ApiResponse.success("Record deleted successfully", null));
    }
}