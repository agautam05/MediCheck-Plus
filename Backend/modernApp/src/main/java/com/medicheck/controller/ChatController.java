package com.medicheck.controller;

import com.medicheck.entity.ChatSession;
import com.medicheck.service.SessionService;
import com.medicheck.websocket.ChatEvent;
import com.medicheck.websocket.ChatMessage;
import com.medicheck.websocket.WebSocketPublisher;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
@Slf4j
public class ChatController {

    private final WebSocketPublisher webSocketPublisher;
    private final SessionService sessionService;

    @MessageMapping("/chat.send")
    public void sendMessage(@Payload ChatMessage chatMessage, SimpMessageHeaderAccessor headerAccessor) {
        String sessionId = chatMessage.getSessionId();
        log.info("WebSocket message received for session: {}, feature: {}", sessionId, chatMessage.getFeature());

        // Validate session
        ChatSession session = sessionService.getSessionByToken(sessionId);
        if (session == null) {
            webSocketPublisher.publishError(sessionId, "SESSION_EXPIRED");
            return;
        }

        // Route based on feature
        String feature = chatMessage.getFeature();
        if ("TRIAGE".equals(feature)) {
            // Handle triage via WebSocket
            webSocketPublisher.publishChunk(sessionId, "Processing your symptoms...");
            webSocketPublisher.publishDone(sessionId, 0, 0);
        } else if ("SCAN".equals(feature)) {
            webSocketPublisher.publishError(sessionId, "USE_REST_API");
        } else {
            webSocketPublisher.publishError(sessionId, "UNKNOWN_FEATURE");
        }
    }

    @MessageMapping("/chat.typing")
    public void typingIndicator(@Payload ChatEvent event) {
        // Handle typing indicator
        log.debug("Typing indicator received for session: {}", event.getSessionId());
    }
}