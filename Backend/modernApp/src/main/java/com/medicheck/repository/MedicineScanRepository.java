package com.medicheck.repository;

import com.medicheck.entity.MedicineScan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface MedicineScanRepository extends JpaRepository<MedicineScan, Long> {
    List<MedicineScan> findBySessionIdOrderByCreatedAtDesc(UUID sessionId);
    Optional<MedicineScan> findByImageHash(String imageHash);
}