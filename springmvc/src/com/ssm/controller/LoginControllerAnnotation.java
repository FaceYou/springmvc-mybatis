package com.ssm.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.constraints.NotNull;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ssm.errorMessage.ErrorMessage;
import com.ssm.pojo.User;
import com.ssm.pojo.custom.UserCustom;
import com.ssm.service.UserService;

/**
 * 
 * <p>Title: LoginControllerAnnotation.java</p>
 * <p>Description: 用户登录控制器</p>
 * <p>Company: 物联网实验室</p>
 * <p>Date: 2016年8月1日</p>
 * <p>author: 田少青</p>
 */
@Controller
public class LoginControllerAnnotation {
	private static final String SUCCESS_CODE = "000000";
	private static final String SUCCESS_MESSAGE = "登录成功";
	
	private static final String USERNAMEERROR_CODE = "000001";
	private static final String USERNAMEERROR_MESSAGE = "用户不存在";
	
	private static final String PASSWORDERROR_CODE = "000002";
	private static final String PASSWORDERROR_MESSAGE = "密码错误";
	
	private static final String RELOGIN_CODE = "000003";
	private static final String RELOGIN_MESSAGE = "重复登录";
	
	private static final String SUCCESS_LOGOUT_CODE = "000004";
	private static final String SUCCESS_LOGOUT_MESSAGE = "注销成功";
	
	private static final String VALIDATED = "000005";
	
	private static final Logger log = LoggerFactory.getLogger(LoginControllerAnnotation.class);
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("/login")
	public @ResponseBody ErrorMessage  login(HttpSession session, 
				 @Validated User user,BindingResult bindingResult) throws Exception{
		
		log.info("---------username   password-------"+user.getUsername() + user.getPassword());
		
		ErrorMessage errorMessage = new ErrorMessage();
		String message = "";
		
		if(bindingResult.hasErrors()){
			List<ObjectError> allErrors = bindingResult.getAllErrors();
			for(ObjectError objectError : allErrors){
				message += objectError.getDefaultMessage();
				System.out.println(objectError.getDefaultMessage());
				errorMessage.setErrorMessage(message);
			}
			
			errorMessage.setErrorCode(VALIDATED);
			
			
			return errorMessage;
		}
		
		User userOther = userService.findUserByName(user.getUsername());
		
		if(userOther == null){
			errorMessage.setErrorCode(USERNAMEERROR_CODE);
			errorMessage.setErrorMessage(USERNAMEERROR_MESSAGE);
			
			return errorMessage;
		}
		
		userOther = userService.findUserByNameAndPassword(user.getUsername(), user.getPassword());
		
		if(userOther == null){
			errorMessage.setErrorCode(PASSWORDERROR_CODE);
			errorMessage.setErrorMessage(PASSWORDERROR_MESSAGE);
			
			return errorMessage;
		}
		
		if(userOther.getState() == true){
			log.info("二次登陆");
			return errorMessage;
		}
		
		errorMessage.setErrorCode(SUCCESS_CODE);
		errorMessage.setErrorMessage(SUCCESS_MESSAGE);
		
		userOther.setState(true);
		
		userService.updateLoginState(userOther);
		
		session.setAttribute("username", user.getUsername());
		
		return errorMessage;
	}
	
	@RequestMapping("/logout")
	public @ResponseBody ErrorMessage logout(HttpSession session) throws Exception{
		ErrorMessage errorMessage = new ErrorMessage();
		
		String username = (String) session.getAttribute("username");
		User user = userService.findUserByName(username);
		
		userService.updateLoginState(user);
		session.invalidate();
		
		errorMessage.setErrorCode(SUCCESS_LOGOUT_CODE);
		errorMessage.setErrorMessage(SUCCESS_LOGOUT_MESSAGE);
		
		return errorMessage;
	}
	
}
