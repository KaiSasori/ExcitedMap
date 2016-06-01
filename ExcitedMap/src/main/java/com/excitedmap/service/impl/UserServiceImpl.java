package com.excitedmap.service.impl;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.excitedmap.dao.UserMapperImpl;
import com.excitedmap.pojo.User;
import com.excitedmap.service.UserService;

@Service("userService")
public class UserServiceImpl implements UserService {
	@Resource
	private UserMapperImpl userDao;

	@Override
	public User getUserById(int userId) {
		return userDao.selectByPrimaryKey(userId);
	}

	@Override
	public User getUser(User user) {
		return userDao.selectByEmailAndPassword(user);
	}

	@Override
	public void registerUser(User user) throws DuplicateKeyException {
		user.setUserId(null);
		user.setUserAvatarPath("default.jpg");
		userDao.insertSelective(user);
	}

	@Override
	public void updateUser(User user) {
		this.userDao.updateByPrimaryKeySelective(user);
	}

	@Override
	public void updateUserAvatarPath(HttpServletRequest request, MultipartFile file, int userId) {
		String uploadRootPath = request.getServletContext().getRealPath("img/avatar");
		File uploadRootDir = new File(uploadRootPath);
		if (!uploadRootDir.exists()) {
			uploadRootDir.mkdirs();
		}
		String name = file.getOriginalFilename();
		if (name != null && name.length() > 0) {
			try {
				byte[] bytes = file.getBytes();
				File serverFile = new File(uploadRootDir.getAbsolutePath() + File.separator + name);
				BufferedOutputStream stream = new BufferedOutputStream(new FileOutputStream(serverFile));
				stream.write(bytes);
				stream.close();
			} catch (Exception e) {
				System.out.println("Error Write file: " + name);
			}
		}
		User user = new User();
		user.setUserId(userId);
		user.setUserAvatarPath(uploadRootDir + File.separator + name);
		userDao.updateByPrimaryKeySelective(user);
	}

	@Override
	public User getUserByOpenId(String openId) {
		return userDao.selectByOpenId(openId);
	}

	@Override
	public void autoRegisterUser(String openId, String accessToken) {
		User user = new User();
		user.setUserId(null);
		user.setUserName("请修改");
		user.setUserEmail(openId);
		user.setUserPassword(accessToken);
		user.setUserAvatarPath("default.jpg");
		userDao.insertSelective(user);
	}
}