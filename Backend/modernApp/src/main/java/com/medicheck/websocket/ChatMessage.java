package com.medicheck.websocket;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ChatMessage {
    private String type;
    private String sessionId;
    private String feature;
    private String content;
    private String role;
    private String lang;
}