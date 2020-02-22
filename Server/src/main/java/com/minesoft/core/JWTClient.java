package com.minesoft.core;

import java.security.Principal;
import java.util.Set;
import java.util.UUID;

public class JWTClient implements Principal {

    private final String name;
    private final UUID id;
    private final Set<String> roles;

    public JWTClient(String name, Set<String> roles, UUID id) {
        this.name = name;
        this.id = id;
        this.roles = roles;
    }

    @Override
    public String getName() {
        return name;
    }

    public Set<String> getRoles() {
        return roles;
    }

    public UUID getId() {
        return id;
    }
}
