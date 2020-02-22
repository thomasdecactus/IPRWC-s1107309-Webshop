package com.minesoft.resources;

import com.minesoft.dao.ProductDAO;
import com.minesoft.model.Product;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.UUID;


@Path("/product")
public class ProductResource {

    private ProductDAO productDAO;

    public ProductResource(ProductDAO productDAO) {
        this.productDAO = productDAO;
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getAllProducts() {
        return Response.ok(productDAO.getAll(), MediaType.APPLICATION_JSON).build();
    }

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/id/{id}")
    public Response findAssignmentById(@PathParam("id") String id) {
        Product idProduct = productDAO.getProductById(id);

        if (idProduct == null) {
            throw new WebApplicationException(Response.Status.NOT_FOUND);
        }

        return Response.ok(idProduct, MediaType.APPLICATION_JSON).build();
    }

    @POST
    @Path("/add")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response addProduct(
            @FormParam("naam") String naam,
            @FormParam("beschrijving") String beschrijving,
            @FormParam("afbeeldinglink") String afbeeldinglink,
            @FormParam("prijs") double prijs,
            @FormParam("voorraad") int voorraad
    ) {
        String productid = UUID.randomUUID().toString();
        productDAO.insertNewProdut(productid,naam,beschrijving,afbeeldinglink,prijs,voorraad);

        return Response.ok("product added").build();
    }

    @POST
    @Path("/delete")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response deleteProduct(
            @FormParam("productid") String productid
    ){
        productDAO.deleteProductById(productid);

        return Response.ok()
                .entity("Deleted product " + productid + " very freaking much successfully")
                .build();
    }

    @POST
    @Path("/update")
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    public Response updateProduct(
            @FormParam("productid") String productid,
            @FormParam("naam") String naam,
            @FormParam("beschrijving") String beschrijving,
            @FormParam("afbeeldinglink") String afbeeldinglink,
            @FormParam("prijs") double prijs,
            @FormParam("voorraad") int voorraad
    ) {
        productDAO.updateProduct(productid,naam,beschrijving,afbeeldinglink,prijs,voorraad);

        return Response.ok()
                .entity("Updated product " + productid + " very freaking much successfully")
                .build();
    }
}
