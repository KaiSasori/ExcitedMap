package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.Wish;
import com.excitedmap.service.WishService;

@RestController
@RequestMapping("/wish")
public class WishController {
	@Resource
	private WishService wishService;

	//插入心愿
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeSetWish(@RequestBody Wish wish) {
		try {
			wishService.setWish(wish);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (DuplicateKeyException e) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}
	//读取心愿，但心愿会有重复，仍需修改！！！！！
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity <List<Wish>> executeGetWishByUserId(@RequestParam int userId) {
			
			return new ResponseEntity<List<Wish>>(wishService.getWishByUserId(userId),HttpStatus.OK);
	}
	
	
}
