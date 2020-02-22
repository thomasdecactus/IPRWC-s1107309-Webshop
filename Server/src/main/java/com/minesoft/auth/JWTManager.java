package com.minesoft.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;

import java.util.Base64;

public class JWTManager {

    private byte[] secret;

    public JWTManager(String secret) {
        this.secret = Base64.getDecoder().decode(secret);
    }

    public Jws<Claims> verifyToken(String token) {
        return Jwts.parser()
                .setSigningKey(secret)
                .parseClaimsJws(token);
    }
}
