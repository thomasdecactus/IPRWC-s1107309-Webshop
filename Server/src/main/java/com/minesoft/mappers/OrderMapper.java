package com.minesoft.mappers;

import com.minesoft.model.Order;
import com.minesoft.model.Product;
import org.jdbi.v3.core.mapper.RowMapper;
import org.jdbi.v3.core.statement.StatementContext;

import java.sql.ResultSet;
import java.sql.SQLException;

public class OrderMapper implements RowMapper<Order> {

    @Override
    public Order map(ResultSet rs, StatementContext ctx) throws SQLException {
        return new Order(
                rs.getString("bestellingid"),
                rs.getDouble("totaalprijs"),
                rs.getInt("aantalstuks"),
                rs.getString("klantid"),
                rs.getString("datum"),
                rs.getString("status")
        );
    }
}
