package com.minesoft.dao;

import com.minesoft.mappers.OrderMapper;
import com.minesoft.model.Order;
import com.minesoft.model.User;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.ArrayList;

@RegisterRowMapper(OrderMapper.class)
public interface OrderDAO {

    @SqlQuery("SELECT * FROM bestelling")
    ArrayList<Order> getAllOrders();

    @SqlQuery("SELECT * FROM bestelling WHERE klantid = :id")
    ArrayList<Order> getOrdersFromUser(@Bind("id") String id);

    @SqlUpdate("INSERT INTO bestelling (bestellingid, totaalprijs, aantalstuks,klantid,datum,status) VALUES (:bestellingid, :totaalprijs,:aantalstuks,:klantid, :datum, :status)")
    void addNewBestelling(
            @Bind("bestellingid") String bestellingid,
            @Bind("totaalprijs") double totaalprijs,
            @Bind("aantalstuks") int aantalstuks,
            @Bind("klantid") String klantid,
            @Bind("datum") String datum,
            @Bind("status") String status
    );

}
