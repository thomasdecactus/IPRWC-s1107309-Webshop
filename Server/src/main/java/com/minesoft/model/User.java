package com.minesoft.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

public class User{

    private String klantid;
    private String email;
    private String wachtwoord;
    private String voornaam;
    private String achternaam;
    private String straat;
    private String huisnummer;
    private String stad;
    private String postcode;
    private String userType;

    @JsonCreator
    public User(String klantid, String email, String wachtwoord, String voornaam, String achternaam, String straat, String huisnummer, String stad, String postcode, String userType) {
        this.klantid = klantid;
        this.email = email;
        this.wachtwoord = wachtwoord;
        this.voornaam = voornaam;
        this.achternaam = achternaam;
        this.straat = straat;
        this.huisnummer = huisnummer;
        this.stad = stad;
        this.postcode = postcode;
        this.userType = userType;
    }

    @JsonProperty
    public String getKlantid() {
        return klantid;
    }

    @JsonProperty
    public String getEmail() {
        return email;
    }

    @JsonProperty
    public String getWachtwoord() {
        return wachtwoord;
    }

    @JsonProperty
    public String getVoornaam() {
        return voornaam;
    }

    @JsonProperty
    public String getAchternaam() {
        return achternaam;
    }

    @JsonProperty
    public String getStraat() {
        return straat;
    }

    @JsonProperty
    public String getHuisnummer() {
        return huisnummer;
    }

    @JsonProperty
    public String getStad() {
        return stad;
    }

    @JsonProperty
    public String getPostcode() {
        return postcode;
    }

    @JsonProperty
    public String getUserType() {
        return userType;
    }
}
