package com.minesoft.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.minesoft.mappers.ProductMapper;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;


@RegisterRowMapper(ProductMapper.class)
public class Product {

    private String productid;
    private String naam;
    private String beschrijving;
    private String afbeeldinglink;
    private double prijs;
    private int voorraad;

    @JsonCreator
    public Product(String productid,String naam,String beschrijving,String afbeeldinglink,double prijs,int voorraad) {
        this.productid = productid;
        this.naam = naam;
        this.beschrijving = beschrijving;
        this.afbeeldinglink = afbeeldinglink;
        this.prijs = prijs;
        this.voorraad = voorraad;
    }

    public Product() {
    }

    @JsonProperty("productid")
    public String getProductid() {
        return productid;
    }

    @JsonProperty("naam")
    public String getNaam() {
        return naam;
    }

    @JsonProperty("beschrijving")
    public String getBeschrijving() {
        return beschrijving;
    }


    @JsonProperty("afbeeldinglink")
    public String getAfbeeldinglink() {
        return afbeeldinglink;
    }

    @JsonProperty("prijs")
    public double getPrijs() {
        return prijs;
    }

    @JsonProperty("voorraad")
    public int getVoorraad() {
        return voorraad;
    }

}
