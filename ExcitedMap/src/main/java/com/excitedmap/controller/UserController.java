package com.excitedmap.controller;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.excitedmap.pojo.Favorite;
import com.excitedmap.pojo.Footprint;
import com.excitedmap.pojo.User;
import com.excitedmap.pojo.Wish;
import com.excitedmap.service.FavoriteService;
import com.excitedmap.service.FootprintService;
import com.excitedmap.service.UserService;
import com.excitedmap.service.WishService;

@RestController
@RequestMapping("/user")
public class UserController {
	@Resource
	private UserService userService;
	@Resource
	private WishService wishService;
	@Resource
	private FavoriteService favoriteService;
	@Resource
	private FootprintService footprintService;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<Void> executeLogin(@RequestBody User user) {
		User validUser = userService.getUser(user);
		if (validUser == null) {
			return new ResponseEntity<Void>(HttpStatus.UNAUTHORIZED);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeRegister(@RequestBody User user) {
		try {
			userService.registerUser(user);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (DuplicateKeyException e) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}

	@RequestMapping(value = "/{userId}/wishList", method = RequestMethod.GET)
	public ResponseEntity<List<Wish>> executeGetWishListByUserId(@PathVariable int userId) {
		return new ResponseEntity<List<Wish>>(wishService.getWishListByUserId(userId), HttpStatus.OK);
	}

	@RequestMapping(value = "/{userId}/favoriteList", method = RequestMethod.GET)
	public ResponseEntity<List<Favorite>> executeGetFavoriteListByUserId(@PathVariable int userId) {
		return new ResponseEntity<List<Favorite>>(favoriteService.getFavoriteListByUserId(userId), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{userId}/footprintList", method = RequestMethod.GET)
	public ResponseEntity<List<Footprint>> executeGetFootprintListByUserId(@PathVariable int userId) {
		return new ResponseEntity<List<Footprint>>(footprintService.getFootprintListByUserId(userId), HttpStatus.OK);
	}

	@RequestMapping(value = "/{userId}/avatar", method = RequestMethod.PUT)
	public String executeUploadAvatar(HttpServletRequest request, @PathVariable int userId,
			@RequestParam("file") MultipartFile file) {
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
		userService.updateUserAvatarPath(userId, name);
		return uploadRootDir + File.separator + name;
	}
}
