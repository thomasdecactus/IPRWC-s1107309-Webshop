package com.minesoft.mappers;

import com.minesoft.model.User;
import org.jdbi.v3.core.mapper.RowMapper;
import org.jdbi.v3.core.statement.StatementContext;
import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper implements RowMapper<User> {
    @Override
    public User map(ResultSet rs, StatementContext ctx) throws SQLException {
        return new User(
                rs.getString("klantid"),
                rs.getString("email"),
                rs.getString("wachtwoord"),
                rs.getString("voornaam"),
                rs.getString("achternaam"),
                rs.getString("straat"),
                rs.getString("huisnummer"),
                rs.getString("stad"),
                rs.getString("postcode"),
                rs.getString("userType")
        );
    }
}