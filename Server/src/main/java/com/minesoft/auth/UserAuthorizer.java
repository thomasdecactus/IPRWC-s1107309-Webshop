package com.minesoft.auth;

import com.minesoft.core.JWTClient;
import io.dropwizard.auth.Authorizer;

public class UserAuthorizer implements Authorizer<JWTClient> {

    @Override
    public boolean authorize(JWTClient client, String role) {
        return client.getRoles() != null && client.getRoles().contains(role);
    }
}
