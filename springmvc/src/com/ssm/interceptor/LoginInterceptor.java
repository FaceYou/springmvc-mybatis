package com.ssm.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

/**
 * 
 * <p>Title: LoginInterceptor.java</p>
 * <p>Description: 登录认证拦截器</p>
 * <p>Company: 物联网实验室</p>
 * <p>Date: 2016年8月1日</p>
 * <p>author: 田少青</p>
 */
public class LoginInterceptor implements HandlerInterceptor {
	private final Logger log = LoggerFactory.getLogger(LoginInterceptor.class);
	private static final String[] LOGIN = {"login.action", "index.html"};
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		log.info("-------------pre-------------");
		
		String url = request.getRequestURI();
		
		log.info("--------"+url+"-----------");
		
		for(String str : LOGIN){
			if(url.indexOf(str) != -1){
				log.info("--------放行-------");
				return true;
			}
		}
		
		HttpSession session = request.getSession();
		
		if(session == null || session.getAttribute("username") == null){
			response.sendRedirect("/springmvc/index.html");
			
			log.info("---------被拦截--------");
			
			return false;
		}
		
		return true;
	}

	//统一异常处理，统一日志处理
	@Override
	public void afterCompletion(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, Exception arg3)
			throws Exception {

	}

	@Override
	public void postHandle(HttpServletRequest arg0, HttpServletResponse arg1, Object arg2, ModelAndView arg3)
			throws Exception {

	}

	

}
