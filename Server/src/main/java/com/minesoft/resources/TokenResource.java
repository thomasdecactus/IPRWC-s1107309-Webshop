package com.minesoft.resources;

import com.minesoft.auth.JWTManager;
import org.json.JSONObject;
import javax.ws.rs.*;
import javax.ws.rs.core.Response;


@Path("/token")
public class TokenResource {

    private String secret;

    public TokenResource(String secret) {
        this.secret = secret;
    }

    @POST
    @Path("/validate")
    public Response validateToken(
            @HeaderParam("Authorization") String auth
    ){
        JWTManager manager = new JWTManager(secret);
        JSONObject jo = new JSONObject();

        try {
            manager.verifyToken(auth);
            jo.put("token_ok", true);
            return Response.ok(jo.toString()).build();
        } catch (Exception e) {
            jo.put("token_ok", false);
            return Response.ok(jo.toString()).build();
        }
    }

}
