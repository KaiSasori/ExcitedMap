package com.excitedmap.service;

import org.springframework.dao.DuplicateKeyException;

import com.excitedmap.pojo.User;

public interface UserService {
	public User getUserById(int userId);

	public User getUser(User user);

	public void registerUser(User user) throws DuplicateKeyException;

	public void updateUser(User user);

	public void updateUserAvatarPath(int userId, String avatarPath);
}