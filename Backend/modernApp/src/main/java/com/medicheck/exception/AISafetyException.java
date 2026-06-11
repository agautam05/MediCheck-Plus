package com.medicheck.exception;

public class AISafetyException extends RuntimeException {
    public AISafetyException(String message) {
        super(message);
    }

    public AISafetyException(String message, Throwable cause) {
        super(message, cause);
    }
}