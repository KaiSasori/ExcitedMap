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

import com.excitedmap.pojo.Favorite;
import com.excitedmap.pojo.User;
import com.excitedmap.service.FavoriteService;

@RestController
@SessionAttributes("loggedInUser")
@RequestMapping("/favorite")
public class FavoriteController {
	@Resource
	private FavoriteService favoriteService;

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddFavorite(@ModelAttribute("loggedInUser") User user,
			@RequestBody Favorite favorite) {
		favorite.setUserId(user.getUserId());
		try {
			favoriteService.addFavorite(favorite);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (DuplicateKeyException e) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public ResponseEntity<Void> executeDeleteFavorite(@ModelAttribute("loggedInUser") User user,
			@RequestBody Favorite favorite) {
		favorite.setUserId(user.getUserId());
		if (favoriteService.deleteFavorite(favorite) == 0) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
	}

}
