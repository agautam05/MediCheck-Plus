package com.medicheck.mapper;

import com.medicheck.entity.Message;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.Map;

@Component
public class MessageMapper {

    public Map<String, Object> toWebSocketMessage(Message message) {
        Map<String, Object> wsMessage = new HashMap<>();
        wsMessage.put("type", "message");
        wsMessage.put("role", message.getRole());
        wsMessage.put("content", message.getContent());
        wsMessage.put("feature", message.getFeature());
        wsMessage.put("createdAt", message.getCreatedAt().toString());
        return wsMessage;
    }

    public Map<String, Object> toChunkMessage(String chunk) {
        Map<String, Object> wsMessage = new HashMap<>();
        wsMessage.put("type", "chunk");
        wsMessage.put("text", chunk);
        return wsMessage;
    }

    public Map<String, Object> toDoneMessage(int tokensUsed, long latencyMs) {
        Map<String, Object> wsMessage = new HashMap<>();
        wsMessage.put("type", "done");
        wsMessage.put("tokens", tokensUsed);
        wsMessage.put("latencyMs", latencyMs);
        return wsMessage;
    }

    public Map<String, Object> toErrorMessage(String code) {
        Map<String, Object> wsMessage = new HashMap<>();
        wsMessage.put("type", "error");
        wsMessage.put("code", code);
        return wsMessage;
    }
}