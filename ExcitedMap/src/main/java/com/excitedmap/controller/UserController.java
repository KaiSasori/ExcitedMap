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

import nl.captcha.Captcha;

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
	public ResponseEntity<User> executeLogin(HttpServletRequest request, @RequestParam String userEmail,
			@RequestParam String userPassword, @RequestParam String userCaptchaCode) {
		try {
			Captcha captcha = (Captcha) request.getSession().getAttribute(Captcha.NAME);
			if (captcha == null) {
				return new ResponseEntity<User>(HttpStatus.REQUEST_TIMEOUT);
			}
			if (!captcha.isCorrect(userCaptchaCode)) {
				return new ResponseEntity<User>(HttpStatus.UNAUTHORIZED);
			}
			User user = new User();
			user.setUserEmail(userEmail);
			user.setUserPassword(userPassword);
			User validUser = userService.getValidUser(user);
			if (validUser == null) {
				return new ResponseEntity<User>(HttpStatus.FORBIDDEN);
			}
			request.getSession().setAttribute("loggedInUser", validUser);
			return new ResponseEntity<User>(validUser, HttpStatus.OK);
		} finally {
			request.getSession().setAttribute(Captcha.NAME, null);
		}
	}

	@RequestMapping(value = "/logout", method = RequestMethod.GET)
	public void executeLogout(HttpServletRequest request) {
		request.getSession().setAttribute("loggedInUser", null);
	}

	// 如果前端接收到BAD_REQUEST，说明用户取消登录或者网站被攻击
	// 如果前端接收到CREATED，说明新用户登录，需要让用户填写userName，之后将userId,accessToken,userName一起传到后台，完成自动注册
	// 如果前端接收到OK，说明用户登录成功
	@RequestMapping(value = "/loginByQQ", method = RequestMethod.POST)
	public ResponseEntity<User> executeLoginByQQ(HttpServletRequest request, @RequestParam String openId,
			@RequestParam String accessToken, @RequestParam String userName) {
		if (openId.equals("")) {
			return new ResponseEntity<User>(HttpStatus.BAD_REQUEST);
		}
		User validUser = userService.getUserByOpenId(openId);
		if (validUser == null) {
			if (userName.equals("")) {
				return new ResponseEntity<User>(HttpStatus.CREATED);
			} else {
				User user = new User();
				user.setUserEmail(openId);
				user.setUserPassword(accessToken);
				user.setUserName(userName);
				userService.registerUser(user);
				request.getSession().setAttribute("loggedInUser", validUser);
				return new ResponseEntity<User>(user, HttpStatus.OK);
			}
		} else {
			// session没测试过，其他已测试
			request.getSession().setAttribute("loggedInUser", validUser);
			return new ResponseEntity<User>(validUser, HttpStatus.OK);

		}
	}

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<User> executeRegister(HttpServletRequest request, @RequestBody User user) {
		try {
			userService.registerUser(user);
			request.getSession().setAttribute("loggedInUser", user);
			return new ResponseEntity<User>(user, HttpStatus.CREATED);
		} catch (DuplicateKeyException e) {
			return new ResponseEntity<User>(HttpStatus.CONFLICT);
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

	@RequestMapping(value = "/{userId}/avatar", method = RequestMethod.POST)
	public ResponseEntity<Void> executeUploadAvatar(HttpServletRequest request, @PathVariable int userId,
			@RequestParam("file") MultipartFile file) {
		User user = (User) request.getSession().getAttribute("loggedInUser");
		userService.updateUserAvatarPath(request, file, user);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
