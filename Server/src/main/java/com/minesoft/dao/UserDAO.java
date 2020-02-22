package com.minesoft.dao;

import com.minesoft.mappers.UserMapper;
import com.minesoft.model.User;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;

import java.util.ArrayList;
import java.util.Optional;
import java.util.UUID;


@RegisterRowMapper(UserMapper.class)
public interface UserDAO {

    @SqlQuery("SELECT * FROM klant")
    ArrayList<User> getAll();

    @SqlQuery("SELECT * FROM klant WHERE email = :email AND wachtwoord = :wachtwoord")
    Optional<User> verifyLogin(@Bind("email") String username, @Bind("wachtwoord") String password);

    @SqlQuery("SELECT * FROM klant WHERE klantid = :id")
    User getUserById(@Bind("id") String id);

    @SqlUpdate("UPDATE klant SET klantid = :klantid, voornaam = :voornaam, achternaam = :achternaam, email = :email, straat = :straat, postcode = :postcode, stad = :stad WHERE klantid = :klantid")
    void UpdateByUserId(
            @Bind("klantid") String klantid,
            @Bind("voornaam") String voornaam,
            @Bind("achternaam") String achternaam,
            @Bind("email") String email,
            @Bind("straat") String straat,
            @Bind("postcode") String postcode,
            @Bind("stad") String stad
    );

}
