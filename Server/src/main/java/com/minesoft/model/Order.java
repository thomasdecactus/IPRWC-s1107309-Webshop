package com.minesoft.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.minesoft.mappers.ProductMapper;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;


@RegisterRowMapper(ProductMapper.class)
public class Order {

    private String bestellingid;
    private double totaalprijs;
    private int aantalstuks;
    private String klantid;
    private String datum;
    private String status;


    @JsonCreator
    public Order(String bestellingid, double totaalprijs, int aantalstuks, String klantid, String datum, String status) {
        this.bestellingid = bestellingid;
        this.totaalprijs = totaalprijs;
        this.aantalstuks = aantalstuks;
        this.klantid = klantid;
        this.datum = datum;
        this.status = status;
    }

    public Order() {
    }

    @JsonProperty("bestellingid")
    public String getBestellingid() {
        return bestellingid;
    }

    @JsonProperty("totaalprijs")
    public double getTotaalprijs() {
        return totaalprijs;
    }

    @JsonProperty("aantalstuks")
    public int getAantalstuks() {
        return aantalstuks;
    }

    @JsonProperty("klantid")
    public String getKlantid() {
        return klantid;
    }

    @JsonProperty("datum")
    public String getDatum() {
        return datum;
    }

    @JsonProperty("status")
    public String getStatus() {
        return status;
    }

}
