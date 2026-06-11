package com.medicheck.scheduler;

import com.medicheck.repository.ChatSessionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
@Slf4j
public class SessionCleanupScheduler {

    private final ChatSessionRepository chatSessionRepository;

    @Scheduled(cron = "0 0 4 * * ?") // Run at 4 AM daily
    public void cleanupExpiredSessions() {
        log.info("Running expired session cleanup...");
        LocalDateTime cutoff = LocalDateTime.now().minusDays(30); // Remove sessions older than 30 days
        chatSessionRepository.deleteByLastActiveAtBefore(cutoff);
        log.info("Expired session cleanup completed.");
    }
}