package com.minesoft.dao;

import com.minesoft.mappers.ProductMapper;
import com.minesoft.model.Product;

import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import java.util.ArrayList;

@RegisterRowMapper(ProductMapper.class)
public interface ProductDAO {

    @SqlQuery("SELECT * FROM product")
    ArrayList<Product> getAll();

    @SqlQuery("SELECT * FROM product WHERE productid = :id")
    Product getProductById(@Bind("id") String id);

    @SqlUpdate("INSERT INTO product (productid, naam, beschrijving, afbeeldinglink, prijs, voorraad) VALUES (:productid, :naam,:beschrijving,:afbeeldinglink, :prijs, :voorraad)")
    void insertNewProdut(
            @Bind("productid") String productid,
            @Bind("naam") String naam,
            @Bind("beschrijving") String beschrijving,
            @Bind("afbeeldinglink") String afbeeldinglink,
            @Bind("prijs") double prijs,
            @Bind("voorraad") int voorraad
    );

    @SqlUpdate("DELETE FROM product WHERE productid = :productid")
    void deleteProductById(
            @Bind("productid") String productid
    );

    @SqlUpdate("UPDATE product SET productid = :productid, naam= :naam, beschrijving= :beschrijving, afbeeldinglink = :afbeeldinglink, prijs = :prijs, voorraad = :voorraad WHERE productid = :productid;")
    void updateProduct(
            @Bind("productid") String productid,
            @Bind("naam") String naam,
            @Bind("beschrijving") String beschrijving,
            @Bind("afbeeldinglink") String afbeeldinglink,
            @Bind("prijs") double prijs,
            @Bind("voorraad") int voorraad
    );


}
