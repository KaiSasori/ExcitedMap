package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.Review;
import com.excitedmap.service.ReviewService;

@RestController
@RequestMapping("/review")
public class ReviewController {
	@Resource
	private ReviewService reviewService;

	// 插入评论，暂定无Duplicate限制
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddReview(@RequestBody Review review) {
		reviewService.addReview(review);
		return new ResponseEntity<Void>(HttpStatus.CREATED);

	}

	// 获得用户的评论
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Review>> executeGetReviewByUserId(@RequestParam int userId) {
		return new ResponseEntity<List<Review>>(reviewService.getReviewByUserId(userId), HttpStatus.OK);
	}

}