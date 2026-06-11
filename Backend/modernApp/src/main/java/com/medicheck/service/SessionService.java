package com.medicheck.service;

import com.medicheck.dto.auth.SessionResponse;
import com.medicheck.entity.ChatSession;
import com.medicheck.mapper.SessionMapper;
import com.medicheck.repository.ChatSessionRepository;
import com.medicheck.security.JwtTokenProvider;
import com.medicheck.util.HashUtil;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
@Slf4j
public class SessionService {

    private final ChatSessionRepository chatSessionRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final SessionMapper sessionMapper;
    private final HashUtil hashUtil;

    @Transactional
    public SessionResponse createSession(String language, String userAgent, String ipAddress) {
        String sessionToken = UUID.randomUUID().toString();

        ChatSession session = ChatSession.builder()
                .sessionToken(sessionToken)
                .language(language != null ? language : "hi")
                .userAgent(userAgent)
                .ipHash(ipAddress != null ? hashUtil.sha256(ipAddress) : null)
                .build();

        chatSessionRepository.save(session);

        String jwt = jwtTokenProvider.generateToken(sessionToken);
        return sessionMapper.toSessionResponse(session, jwt);
    }

    public ChatSession getSessionByToken(String sessionToken) {
        return chatSessionRepository.findBySessionToken(sessionToken)
                .orElse(null);
    }

    public boolean isValidSession(String sessionToken) {
        return chatSessionRepository.findBySessionToken(sessionToken).isPresent();
    }
}