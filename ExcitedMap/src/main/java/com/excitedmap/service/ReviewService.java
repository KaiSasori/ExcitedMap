package com.excitedmap.service;

import java.util.List;

import org.springframework.dao.DuplicateKeyException;

import com.excitedmap.pojo.Review;

public interface ReviewService {
	public List<Review> getReviewByUserId(int userId);

	public List<Review> getReviewBySpotId(int spotId);

	public void addReview(Review review);

}