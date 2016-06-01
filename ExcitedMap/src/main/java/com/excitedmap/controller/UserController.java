package com.excitedmap.controller;

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
import com.excitedmap.pojo.Review;
import com.excitedmap.pojo.SearchHistory;
import com.excitedmap.pojo.User;
import com.excitedmap.pojo.Wish;
import com.excitedmap.service.FavoriteService;
import com.excitedmap.service.FootprintService;
import com.excitedmap.service.ReviewService;
import com.excitedmap.service.SearchService;
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
	@Resource
	private ReviewService reviewService;
	@Resource
	private SearchService searchService;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ResponseEntity<User> executeLogin(HttpServletRequest request, @RequestBody User user) {
		User validUser = userService.getValidUser(user);
		if (validUser == null) {
			return new ResponseEntity<User>(HttpStatus.UNAUTHORIZED);
		}
		request.getSession().setAttribute("loggedInUser", validUser);
		return new ResponseEntity<User>(validUser, HttpStatus.OK);
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public void executeLogout(HttpServletRequest request) {
		request.getSession().setAttribute("loggedInUser", null);
	}
	
	@RequestMapping(value = "/loginByQQ", method = RequestMethod.POST)
	public ResponseEntity<Void> executeLoginByQQ(@RequestParam String openId, String accessToken) {
		User validUser = userService.getUserByOpenId(openId);
		if (validUser == null) {
			userService.autoRegisterUser(openId, accessToken);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
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

	@RequestMapping(value = "/{userId}/reviewList", method = RequestMethod.GET)
	public ResponseEntity<List<Review>> executeGetReviewListByUserId(@PathVariable int userId) {
		return new ResponseEntity<List<Review>>(reviewService.getReviewListByUserId(userId), HttpStatus.OK);
	}

	@RequestMapping(value = "/{userId}/searchHistoryList", method = RequestMethod.GET)
	public ResponseEntity<List<SearchHistory>> executeGetSearchHistoryListByUserId(@PathVariable int userId,
			@RequestParam String keyword, @RequestParam int limit) {
		return new ResponseEntity<List<SearchHistory>>(
				searchService.getSearchHistoryListByUserId(userId, keyword, limit), HttpStatus.OK);
	}

	@RequestMapping(value = "/{userId}/avatar", method = RequestMethod.PUT)
	public ResponseEntity<Void> executeUploadAvatar(HttpServletRequest request, @PathVariable int userId,
			@RequestParam("file") MultipartFile file) {
		userService.updateUserAvatarPath(request, file, userId);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
