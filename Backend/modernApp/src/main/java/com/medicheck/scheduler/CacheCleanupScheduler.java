package com.medicheck.scheduler;

import lombok.extern.slf4j.Slf4j;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class CacheCleanupScheduler {

    @Scheduled(cron = "0 0 3 * * ?") // Run at 3 AM daily
    public void cleanupCache() {
        log.info("Running scheduled cache cleanup...");
        // Cache cleanup logic would be implemented here
        // In production, this would evict expired entries from Redis
        log.info("Cache cleanup completed.");
    }
}