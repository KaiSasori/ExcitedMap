package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.Favorite;
import com.excitedmap.service.FavoriteService;

@RestController
@RequestMapping("/favorite")
public class FavoriteController {
	@Resource
	private FavoriteService favoriteService;

	// 加入收藏，SQL处还没有做Duplicate限制，先假装有限制。
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddWish(@RequestBody Favorite favorite) {
		try {
			favoriteService.addFavorite(favorite);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (DuplicateKeyException e) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}

	@RequestMapping(value="/{userId}", method = RequestMethod.GET)
	public ResponseEntity<List<Favorite>> executeGetFavoriteByUserId(@PathVariable int userId) {
		return new ResponseEntity<List<Favorite>>(favoriteService.getFavoriteByUserId(userId), HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public ResponseEntity<Void> executeDeleteFavorite(@RequestBody Favorite favorite) {
		favoriteService.deleteFavorite(favorite);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
