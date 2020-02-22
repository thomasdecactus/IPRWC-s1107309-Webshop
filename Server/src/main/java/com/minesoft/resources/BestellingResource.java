package com.minesoft.resources;

import com.minesoft.dao.OrderDAO;
import com.minesoft.dao.UserDAO;
import com.minesoft.model.Order;
import com.minesoft.model.User;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.time.Instant;
import java.util.*;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.json.JSONObject;


@Path("/order")
public class BestellingResource {

    private OrderDAO dao;
    private byte[] secret;

    public BestellingResource(OrderDAO dao, String secret) {
        this.dao = dao;
        this.secret = Base64.getDecoder().decode(secret);
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Order> getAll() {
        return dao.getAllOrders();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/user/{user_id}")
    public Response findUserById(@PathParam("user_id") String id) {
        List<Order> order= dao.getOrdersFromUser(id);

        if (order == null) {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }

        return Response.ok(order, MediaType.APPLICATION_JSON).build();
    }

    @POST
    @Path("/createOrder")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response createOrder(
            @FormParam("totaalprijs") double totaalprijs,
            @FormParam("aantalstuks") int aantalstuks,
            @FormParam("klantid") String klantid,
            @FormParam("datum") String datum
    ) {
        String bestellingid = UUID.randomUUID().toString();
        String status = "bezig";

        dao.addNewBestelling(bestellingid,totaalprijs,aantalstuks,klantid,datum,status);

        return Response.ok("product added").build();
    }




}
