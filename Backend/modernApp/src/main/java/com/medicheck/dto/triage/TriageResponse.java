package com.medicheck.dto.triage;

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
public class TriageResponse {
    private String level;
    private String summary;
    private List<String> homeAdvice;
    private String clinicReason;
    private List<String> emergencySigns;
    private String followUpQuestion;
}