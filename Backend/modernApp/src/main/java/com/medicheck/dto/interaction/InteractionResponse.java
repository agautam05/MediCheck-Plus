package com.medicheck.dto.interaction;

import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class InteractionResponse {
    private List<InteractionItem> interactions;
    private String overallSafety;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class InteractionItem {
        private List<String> drugs;
        private String severity;
        private String description;
        private String recommendation;
    }
}