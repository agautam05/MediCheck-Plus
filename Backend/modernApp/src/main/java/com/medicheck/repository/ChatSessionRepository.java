package com.medicheck.repository;

import com.medicheck.entity.ChatSession;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface ChatSessionRepository extends JpaRepository<ChatSession, UUID> {
    Optional<ChatSession> findBySessionToken(String sessionToken);
    void deleteByLastActiveAtBefore(LocalDateTime cutoff);
}