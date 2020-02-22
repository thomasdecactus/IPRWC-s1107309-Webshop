package com.minesoft.resources;

import com.minesoft.dao.UserDAO;
import com.minesoft.model.User;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.time.Instant;
import java.util.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.json.JSONObject;


@Path("/user")
public class UserResource {

    private UserDAO dao;
    private byte[] secret;

    public UserResource(UserDAO dao, String secret) {
        this.dao = dao;
        this.secret = Base64.getDecoder().decode(secret);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<User> getAll() {
        return dao.getAll();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/id/{user_id}")
    public Response findUserById(@PathParam("user_id") String id) {
        User user = dao.getUserById(id);

        if (user == null) {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }

        return Response.ok(user, MediaType.APPLICATION_JSON).build();
    }

    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/login")
    public Response verifyUserCredentials(
            @FormParam("email") String email,
            @FormParam("wachtwoord") String wachtwoord) {

        User loggedInUser = dao.verifyLogin(email, wachtwoord).orElseThrow(() -> new WebApplicationException(Response.Status.UNAUTHORIZED));

        Instant now = Instant.now();

        String jwt = Jwts.builder()
                .setHeaderParam("typ", "JWT")
                .setSubject(loggedInUser.getVoornaam() + " " + loggedInUser.getAchternaam())
                .setId(loggedInUser.getKlantid().toString())
                .setIssuedAt(Date.from(now))
                .claim("userType", loggedInUser.getUserType())
                .setIssuedAt(Date.from(now))
                .setExpiration(Date.from(now.plusSeconds(30)))
                .signWith(Keys.hmacShaKeyFor(secret))
                .compact();

        JSONObject tokenJSONRepresentation = new JSONObject();
        tokenJSONRepresentation.put("token", jwt);
        tokenJSONRepresentation.put("klantid", loggedInUser.getKlantid());
        tokenJSONRepresentation.put("email", loggedInUser.getEmail());
        tokenJSONRepresentation.put("wachtwoord", loggedInUser.getWachtwoord());
        tokenJSONRepresentation.put("voornaam", loggedInUser.getVoornaam());
        tokenJSONRepresentation.put("achternaam", loggedInUser.getAchternaam());
        tokenJSONRepresentation.put("straat", loggedInUser.getStraat());
        tokenJSONRepresentation.put("huisnummer", loggedInUser.getHuisnummer());
        tokenJSONRepresentation.put("stad", loggedInUser.getStad());
        tokenJSONRepresentation.put("postcode", loggedInUser.getPostcode());
        tokenJSONRepresentation.put("usertype", loggedInUser.getUserType());

       return Response.ok(tokenJSONRepresentation.toString(), MediaType.APPLICATION_JSON).build();

    }

    @POST
    @Path("/update")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response updateUser(
            @FormParam("klantid") String klantid,
            @FormParam("voornaam") String voornaam,
            @FormParam("achternaam") String achternaam,
            @FormParam("email") String email,
            @FormParam("straat") String straat,
            @FormParam("postcode") String postcode,
            @FormParam("stad") String stad
    ) {
        dao.UpdateByUserId(
                klantid,
                voornaam,
                achternaam,
                email,
                straat,
                postcode,
                stad
        );

        return Response.ok()
                .entity("Updated user " + voornaam + " successfully")
                .build();
    }

}
