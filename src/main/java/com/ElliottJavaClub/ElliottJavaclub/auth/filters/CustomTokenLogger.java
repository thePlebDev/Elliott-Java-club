package com.ElliottJavaClub.ElliottJavaclub.auth.filters;

import org.springframework.security.web.csrf.CsrfToken;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.logging.Logger;

public class CustomTokenLogger implements Filter {
    private Logger logger = Logger.getLogger(CustomTokenLogger.class.getName());

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {

        Object o = servletRequest.getAttribute("_csrf");
        CsrfToken token = (CsrfToken) o;
         logger.info("CSRF token ----------> " + token);

        filterChain.doFilter(servletRequest,servletResponse);

    }
}
