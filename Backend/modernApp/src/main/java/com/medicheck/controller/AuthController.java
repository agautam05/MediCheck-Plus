package com.medicheck.controller;

import com.medicheck.dto.auth.SessionRequest;
import com.medicheck.dto.auth.SessionResponse;
import com.medicheck.dto.common.ApiResponse;
import com.medicheck.service.SessionService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final SessionService sessionService;

    @PostMapping("/session")
    public ResponseEntity<ApiResponse<SessionResponse>> createSession(
            @RequestBody(required = false) SessionRequest request,
            HttpServletRequest httpRequest) {

        String language = request != null ? request.getLanguage() : "hi";

        SessionResponse sessionResponse = sessionService.createSession(
                language,
                httpRequest.getHeader("User-Agent"),
                httpRequest.getRemoteAddr()
        );

        return ResponseEntity.ok(ApiResponse.success("Session created successfully", sessionResponse));
    }
}