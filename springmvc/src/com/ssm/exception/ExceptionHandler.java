package com.ssm.exception;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.ModelAndView;

import com.ssm.exception.customException.CustomException;

public class ExceptionHandler implements HandlerExceptionResolver {
	private static final Logger logger = LoggerFactory.getLogger(ExceptionHandler.class);
	
	@Override
	public @ResponseBody ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handler,
			Exception ex) {
		logger.info("---------Exception---------");
		
		CustomException customException;
		
		if(ex instanceof CustomException){
			customException = (CustomException) ex;
		}else{
			customException = new CustomException("未知错误");
		}
		
		String message = customException.getMessage();
		
		ModelAndView modelAndView = new ModelAndView();
		modelAndView.addObject("message", message);
		
		return modelAndView;
	}

}
