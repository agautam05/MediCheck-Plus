package com.medicheck.repository;

import com.medicheck.entity.Message;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface MessageRepository extends JpaRepository<Message, Long> {
    List<Message> findBySessionIdOrderByCreatedAtAsc(UUID sessionId);
    List<Message> findBySessionIdAndFeatureOrderByCreatedAtAsc(UUID sessionId, String feature);
    void deleteBySessionId(UUID sessionId);
}