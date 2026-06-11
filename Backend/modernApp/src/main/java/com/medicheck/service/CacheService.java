package com.medicheck.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Service;

import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
@Slf4j
public class CacheService {

    private final RedisTemplate<String, Object> redisTemplate;

    public void cacheResult(String key, Object value, long ttlDays) {
        try {
            redisTemplate.opsForValue().set(key, value, ttlDays, TimeUnit.DAYS);
        } catch (Exception e) {
            log.warn("Failed to cache result for key: {}", key, e);
        }
    }

    public Object getCachedResult(String key) {
        try {
            return redisTemplate.opsForValue().get(key);
        } catch (Exception e) {
            log.warn("Failed to get cached result for key: {}", key, e);
            return null;
        }
    }

    public void evictCache(String key) {
        try {
            redisTemplate.delete(key);
        } catch (Exception e) {
            log.warn("Failed to evict cache for key: {}", key, e);
        }
    }
}