package com.excitedmap.service.impl;

import java.util.List;

import javax.annotation.Resource;
import org.springframework.stereotype.Service;

import com.excitedmap.dao.ReviewMapperImpl;
import com.excitedmap.pojo.Review;
import com.excitedmap.service.ReviewService;

@Service("reviewService")
public class ReviewServiceImpl implements ReviewService {
	@Resource
	private ReviewMapperImpl reviewDao;

	@Override
	public List<Review> getReviewListByUserId(int userId) {
		return reviewDao.selectByUserId(userId);
	}

	@Override
	public List<Review> getReviewBySpotId(int spotId) {
		// mapping尚未实现
		return null;
	}

	@Override
	public void addReview(Review review) {
		reviewDao.insertSelective(review);

	}

}
