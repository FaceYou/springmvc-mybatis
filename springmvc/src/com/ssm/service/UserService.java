package com.ssm.service;

import com.ssm.pojo.User;
import com.ssm.pojo.custom.UserCustom;

public interface UserService {
	/*public List<ItemsCustom> findItemsList(ItemsQueryVo itemsQueryVo) throws Exception;
	public ItemsCustom findItemsById(Integer id) throws Exception;
	public void updateItems(Integer id, ItemsCustom itemsCustom) throws Exception;
	public List<ItemsCustom> findItemsAll() throws Exception;*/
	
	public User findUserByNameAndPassword(String username, String password) throws Exception;
	public User findUserByName(String username) throws Exception;
	public void cancel(User user)throws Exception;
	public void updateLoginState(User user)throws Exception;
}
