package com.medicheck.mapper;

import com.medicheck.dto.auth.SessionResponse;
import com.medicheck.entity.ChatSession;
import org.springframework.stereotype.Component;

@Component
public class SessionMapper {

    public SessionResponse toSessionResponse(ChatSession session, String token) {
        if (session == null) return null;

        return SessionResponse.builder()
                .sessionToken(token)
                .language(session.getLanguage())
                .createdAt(session.getCreatedAt())
                .expiresAt(session.getCreatedAt().plusMinutes(30))
                .build();
    }
}