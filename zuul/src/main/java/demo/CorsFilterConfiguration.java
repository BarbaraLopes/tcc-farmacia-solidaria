package demo;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

@Component
public class CorsFilterConfiguration implements Filter {
    
   @Override
   public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {

       final HttpServletResponse response = (HttpServletResponse) res;

       response.setHeader("Access-Control-Allow-Origin" , "http://localhost:4200");
       response.setHeader("Access-Control-Allow-Methods" , "GET, POST, PUT, DELETE, OPTIONS, HEAD");
       response.setHeader("Access-Control-Allow-Headers" , "Content-Type, Authorization");
       response.setHeader("Access-Control-Allow-Credentials" , "true");
       response.setHeader("Access-Control-Max-Age" , "1");
       response.setHeader("Access-Control-Expose-Headers" , "Content-Type, Authorization");
       
       if ("OPTIONS".equalsIgnoreCase(((HttpServletRequest) req).getMethod())) {
           response.setStatus(HttpServletResponse.SC_OK);
           return;
       } else {
           chain.doFilter(req, res);
       }
   }

   @Override
   public void destroy() {
   }

   @Override
   public void init(FilterConfig config) throws ServletException {
   }
}