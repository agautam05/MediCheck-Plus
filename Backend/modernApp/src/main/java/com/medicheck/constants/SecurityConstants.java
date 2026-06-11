package com.medicheck.constants;

public final class SecurityConstants {

    private SecurityConstants() {}

    public static final String HEADER_STRING = "Authorization";
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String SESSION_TOKEN_HEADER = "X-Session-Token";
    public static final long JWT_EXPIRY_MINUTES = 30;
    public static final long REFRESH_TOKEN_EXPIRY_HOURS = 24;
    public static final int RATE_LIMIT_REQUESTS_PER_MINUTE = 20;
    public static final String CLAUDE_API_KEY_HEADER = "x-api-key";
    public static final String CLAUDE_API_VERSION = "2023-06-01";
}