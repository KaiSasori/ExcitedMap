package com.excitedmap.service.impl;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.excitedmap.dao.UserMapperImpl;
import com.excitedmap.pojo.User;
import com.excitedmap.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	@Resource
	private UserMapperImpl userDao;

	public User getUserById(int userId) {
		return userDao.selectByPrimaryKey(userId);
	}

	public User getUser(User user) {
		return userDao.selectByEmailAndPassword(user);
	}

	public void registerUser(User user) throws DuplicateKeyException {
		user.setUserId(null);
		user.setUserAvatarPath("default.jpg");
		userDao.insertSelective(user);
	}

	public void updateUser(User user) {
		this.userDao.updateByPrimaryKeySelective(user);
	}
}