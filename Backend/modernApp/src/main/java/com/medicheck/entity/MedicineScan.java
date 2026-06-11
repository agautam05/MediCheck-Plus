package com.medicheck.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "medicine_scans")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MedicineScan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "session_id", nullable = false)
    private ChatSession session;

    @Column(name = "image_s3_key")
    private String imageS3Key;

    @Column(name = "image_hash", length = 64)
    private String imageHash;

    @Column(name = "brand_name")
    private String brandName;

    @Column(name = "generic_name")
    private String genericName;

    @Column(name = "ai_response", columnDefinition = "jsonb")
    private String aiResponse;

    @Column(precision = 3, scale = 2)
    private BigDecimal confidence;

    @Column(name = "created_at", nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}