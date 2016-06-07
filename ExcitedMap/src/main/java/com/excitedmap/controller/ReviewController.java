package com.excitedmap.controller;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;

import com.excitedmap.pojo.ReviewImpl;
import com.excitedmap.pojo.ReviewPhoto;
import com.excitedmap.pojo.User;
import com.excitedmap.service.ReviewService;

@RestController
@RequestMapping("/review")
@SessionAttributes("loggedInUser")
public class ReviewController {
	@Resource
	private ReviewService reviewService;

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddReview(@ModelAttribute("loggedInUser") User user,
			@RequestBody ReviewImpl review) {
		review.setUserId(user.getUserId());
		reviewService.addReview(review);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@RequestMapping(value = "/photo", method = RequestMethod.POST)
	public ReviewPhoto executeUploadReviewPhoto(HttpServletRequest request, @RequestParam("file") MultipartFile file) {
		return reviewService.addReviewPhoto(request, file);
	}
}
