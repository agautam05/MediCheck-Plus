package com.medicheck.security;

import com.medicheck.entity.ChatSession;
import com.medicheck.repository.ChatSessionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final ChatSessionRepository chatSessionRepository;

    @Override
    public UserDetails loadUserByUsername(String sessionToken) throws UsernameNotFoundException {
        ChatSession session = chatSessionRepository.findBySessionToken(sessionToken)
                .orElseThrow(() -> new UsernameNotFoundException("Session not found: " + sessionToken));

        return new User(
                session.getSessionToken(),
                "",
                Collections.emptyList()
        );
    }
}