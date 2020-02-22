package com.minesoft.mappers;

import com.minesoft.model.Product;
import org.jdbi.v3.core.mapper.RowMapper;
import org.jdbi.v3.core.statement.StatementContext;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductMapper implements RowMapper<Product> {

    @Override
    public Product map(ResultSet rs, StatementContext ctx) throws SQLException {
        return new Product(
                rs.getString("productid"),
                rs.getString("naam"),
                rs.getString("beschrijving"),
                rs.getString("afbeeldinglink"),
                rs.getDouble("prijs"),
                rs.getInt("voorraad")
        );
    }
}
