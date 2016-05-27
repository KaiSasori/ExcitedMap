package com.excitedmap.service;

import java.util.List;

import com.excitedmap.pojo.Review;

public interface ReviewService {
	public List<Review> getReviewListByUserId(int userId);

	public List<Review> getReviewBySpotId(int spotId);

	public void addReview(Review review);

}