package com.ssm.filter;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class LoginFilter implements Filter {
	private static final Logger log = LoggerFactory.getLogger(LoginFilter.class);
	
	@Override
	public void destroy() {

	}

	@Override
	public void doFilter(ServletRequest arg0, ServletResponse arg1, FilterChain filter)
			throws IOException, ServletException {
		
			log.info("========进入LoginFilter=========");
			
			HttpServletRequest request = (HttpServletRequest) arg0;
			HttpServletResponse response = (HttpServletResponse) arg1;
			
			String currentUrl = request.getRequestURI();
			String targetUrl = currentUrl.substring(currentUrl.indexOf("/",1),currentUrl.length());
			
			HttpSession session = request.getSession(false);
			
			log.info(targetUrl);
			if(!"/index.html".equals(targetUrl)){
				/*log.info("session.username"+ session.getAttribute("username"));*/
				if(session == null || session.getAttribute("username") == null){
					log.info("request.getContextPath= " + request.getContextPath());
					
					response.sendRedirect(request.getContextPath()+"/index.html");
					
					return;
				}
			}
			filter.doFilter(request, response);
	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}

}
