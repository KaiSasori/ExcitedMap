package com.excitedmap.controller;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.excitedmap.pojo.User;
import com.excitedmap.pojo.Wish;
import com.excitedmap.service.WishService;

@RestController
@SessionAttributes("loggedInUser")
@RequestMapping("/wish")
public class WishController {
	@Resource
	private WishService wishService;

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddWish(@ModelAttribute("loggedInUser") User user, @RequestBody Wish wish) {
		wish.setUserId(user.getUserId());
		try {
			wishService.addWish(wish);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (DuplicateKeyException e) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public ResponseEntity<Void> executeDeleteWish(@ModelAttribute("loggedInUser") User user, @RequestBody Wish wish) {
		wish.setUserId(user.getUserId());
		if (wishService.deleteWish(wish) == 0) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
	}

}
