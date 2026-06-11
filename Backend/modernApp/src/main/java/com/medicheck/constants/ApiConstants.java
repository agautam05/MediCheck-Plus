package com.medicheck.constants;

public final class ApiConstants {

    private ApiConstants() {}

    public static final String API_BASE_PATH = "/api/v1";
    public static final String AUTH_PATH = API_BASE_PATH + "/auth";
    public static final String MEDICINE_PATH = API_BASE_PATH + "/medicine";
    public static final String TRIAGE_PATH = API_BASE_PATH + "/triage";
    public static final String INTERACTION_PATH = API_BASE_PATH + "/interaction";
    public static final String HISTORY_PATH = API_BASE_PATH + "/history";
    public static final String HEALTH_PATH = API_BASE_PATH + "/health";
    public static final String WEB_SOCKET_PATH = "/ws/chat";
    public static final String WEBHOOK_PATH = "/webhook/whatsapp";

    public static final int MAX_IMAGE_SIZE_BYTES = 2_097_152; // 2 MB
    public static final int MAX_TEXT_LENGTH = 2000;
    public static final int DEFAULT_PAGE_SIZE = 20;
    public static final int SESSION_EXPIRY_MINUTES = 30;
    public static final int CACHE_TTL_DAYS = 7;
    public static final int IMAGE_TTL_HOURS = 24;
}