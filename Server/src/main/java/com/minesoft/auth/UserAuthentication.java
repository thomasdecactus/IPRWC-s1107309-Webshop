package com.minesoft.auth;

import com.minesoft.core.JWTClient;
import com.minesoft.dao.UserDAO;
import com.minesoft.model.User;
import io.dropwizard.auth.Authenticator;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import org.jdbi.v3.core.Jdbi;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;
import java.util.HashSet;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;

public class UserAuthentication implements Authenticator<String, JWTClient> {

    private UserDAO userDAO;
    private JWTManager jwtManager;

    public UserAuthentication(Jdbi jdbi, JWTManager manager) {
        this.userDAO = jdbi.onDemand(UserDAO.class);
        this.jwtManager = manager;
    }

    @Override
    public Optional<JWTClient> authenticate(String s) throws WebApplicationException {
        try {
            Jws<Claims> decodedJWT = jwtManager.verifyToken(s);
            String id = decodedJWT.getBody().getId();
            User user = userDAO.getUserById(id);

            if (user == null) {
                throw new WebApplicationException(Response.Status.UNAUTHORIZED);
            }

            Set<String> roles = new HashSet<>();

            switch (user.getUserType()) {
                case "student":
                    roles.add("student");
                    break;
                case "instructor":
                    roles.add("student");
                    roles.add("instructor");
                    break;
                case "admin":
                    roles.add("student");
                    roles.add("instructor");
                    roles.add("admin");
                    break;
                default:
                    break;
            }

            return Optional.of(new JWTClient(decodedJWT.getBody().getSubject(), roles, UUID.fromString(id)));
        } catch (Exception e) {
            throw new WebApplicationException(Response.Status.UNAUTHORIZED);
        }
    }
}
