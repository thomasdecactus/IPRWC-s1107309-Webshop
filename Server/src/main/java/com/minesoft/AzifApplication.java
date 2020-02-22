package com.minesoft;

import com.minesoft.auth.JWTManager;
import com.minesoft.auth.UserAuthentication;
import com.minesoft.auth.UserAuthorizer;
import com.minesoft.core.JWTClient;
import com.minesoft.dao.*;
import com.minesoft.resources.*;
import io.dropwizard.Application;
import io.dropwizard.assets.AssetsBundle;
import io.dropwizard.auth.AuthDynamicFeature;
import io.dropwizard.auth.oauth.OAuthCredentialAuthFilter;
import io.dropwizard.jdbi3.JdbiFactory;
import io.dropwizard.server.DefaultServerFactory;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.glassfish.jersey.media.multipart.MultiPartFeature;
import org.jdbi.v3.core.Jdbi;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;
import java.util.EnumSet;

public class AzifApplication extends Application<AzifConfiguration> {

    public static void main(final String[] args) throws Exception {
        new AzifApplication().run(args);
    }

    @Override
    public String getName() {
        return "Azif";
    }

    @Override
    public void initialize(final Bootstrap<AzifConfiguration> bootstrap) {
        // TODO: application initialization
        bootstrap.addBundle(new AssetsBundle("/assets/", "/"));
    }

    @Override
    public void run(final AzifConfiguration configuration, final Environment environment) {

        final JWTManager jwtManager = new JWTManager(configuration.getSecret());
        final JdbiFactory factory = new JdbiFactory();
        final Jdbi jdbi = factory.build(environment, configuration.getDataSourceFactory(), "postgresql");

        final ProductDAO productDAO = jdbi.onDemand(ProductDAO.class);
        final UserDAO userDAO = jdbi.onDemand(UserDAO.class);
        final OrderDAO orderDAO = jdbi.onDemand(OrderDAO.class);

        final DefaultServerFactory serverFactory = (DefaultServerFactory) configuration.getServerFactory();
        serverFactory.setApplicationContextPath("/");
        serverFactory.setJerseyRootPath("/api");

        //CORS HEADER FIX:
        // Enable CORS headers
        final FilterRegistration.Dynamic cors = environment.servlets().addFilter("CORS", CrossOriginFilter.class);

        // Configure CORS parameters
        cors.setInitParameter("allowedOrigins", "*");
        cors.setInitParameter("allowedHeaders", "X-Requested-With,Content-Type,Accept,Origin, Authorization");
        cors.setInitParameter("allowedMethods", "OPTIONS,GET,PUT,POST,DELETE,HEAD");

        // Add URL mapping
        cors.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");

        environment.jersey().register(new AuthDynamicFeature(
                new OAuthCredentialAuthFilter.Builder<JWTClient>()
                        .setAuthenticator(new UserAuthentication(jdbi, jwtManager))
                        .setAuthorizer(new UserAuthorizer())
                        .buildAuthFilter()
        ));
        environment.jersey().register(new TokenResource(configuration.getSecret()));
        environment.jersey().register(new ProductResource(productDAO));
        environment.jersey().register(new BestellingResource(orderDAO, configuration.getSecret()));
        environment.jersey().register(new UserResource(userDAO, configuration.getSecret()));
        environment.jersey().register(MultiPartFeature.class);
    }

}
