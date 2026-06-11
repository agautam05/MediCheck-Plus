package com.medicheck.security;

import com.medicheck.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class JwtTokenProvider {

    private final JwtUtil jwtUtil;

    public String generateToken(String sessionToken) {
        return jwtUtil.generateToken(sessionToken);
    }

    public String getSessionTokenFromToken(String token) {
        return jwtUtil.getSessionTokenFromToken(token);
    }

    public boolean validateToken(String token) {
        return jwtUtil.validateToken(token);
    }
}