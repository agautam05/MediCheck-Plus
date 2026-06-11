package com.medicheck.websocket;

import com.medicheck.mapper.MessageMapper;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Slf4j
public class WebSocketPublisher {

    private final SimpMessagingTemplate messagingTemplate;
    private final MessageMapper messageMapper;

    public void publishChunk(String sessionId, String chunk) {
        try {
            var message = messageMapper.toChunkMessage(chunk);
            messagingTemplate.convertAndSend("/topic/session/" + sessionId, message);
        } catch (Exception e) {
            log.error("Failed to publish chunk to session {}: {}", sessionId, e.getMessage());
        }
    }

    public void publishDone(String sessionId, int tokensUsed, long latencyMs) {
        try {
            var message = messageMapper.toDoneMessage(tokensUsed, latencyMs);
            messagingTemplate.convertAndSend("/topic/session/" + sessionId, message);
        } catch (Exception e) {
            log.error("Failed to publish done message to session {}: {}", sessionId, e.getMessage());
        }
    }

    public void publishError(String sessionId, String errorCode) {
        try {
            var message = messageMapper.toErrorMessage(errorCode);
            messagingTemplate.convertAndSend("/topic/session/" + sessionId, message);
        } catch (Exception e) {
            log.error("Failed to publish error to session {}: {}", sessionId, e.getMessage());
        }
    }
}