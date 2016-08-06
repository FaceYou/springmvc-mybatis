package com.ssm.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.ssm.mapper.UserMapper;
import com.ssm.pojo.User;
import com.ssm.pojo.UserExample;
import com.ssm.pojo.UserExample.Criteria;
import com.ssm.pojo.custom.UserCustom;
import com.ssm.service.UserService;

public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserMapper userMapper;
	
	@Override
	public User findUserByNameAndPassword(String username, String password) throws Exception {
		
		UserExample example = new UserExample();
		Criteria criteria = example.createCriteria();
		criteria.andUsernameEqualTo(username).andPasswordEqualTo(password);
		
		List<User> userList = userMapper.selectByExample(example);
		
		User user = userList.get(0);
		
		return user;
	}

	@Override
	public User findUserByName(String username) throws Exception {
		UserExample example = new UserExample();
		Criteria criteria = example.createCriteria();
		criteria.andUsernameEqualTo(username);
		
		List<User> userList = userMapper.selectByExample(example);
		User user = new User();
		
		if(userList.isEmpty() ){
			return null;
		}
		user = userList.get(0);
		
		return user;
	}
	
	@Override
	public void updateLoginState(User user) throws Exception {
		user.setState(true);
		userMapper.updateByPrimaryKey(user);
	}

	
	@Override
	public void cancel(User user) throws Exception {
		user.setState(false);
		userMapper.updateByPrimaryKey(user);
	}

}
