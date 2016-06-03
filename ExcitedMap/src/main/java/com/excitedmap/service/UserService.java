package com.excitedmap.service;

import javax.servlet.http.HttpServletRequest;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.web.multipart.MultipartFile;

import com.excitedmap.pojo.User;

public interface UserService {
	public User getUserById(int userId);
	
	public User getUserByOpenId(String openId);
	
	public void autoRegisterUser(String openId,String accessToken);
	
	public User getValidUser(User user);

	public void registerUser(User user) throws DuplicateKeyException;

	public void updateUser(User user);

	void updateUserAvatarPath(HttpServletRequest request, MultipartFile file, User user);
}