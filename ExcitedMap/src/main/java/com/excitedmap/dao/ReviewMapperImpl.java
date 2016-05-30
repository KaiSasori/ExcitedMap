package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.Review;

public interface ReviewMapperImpl extends ReviewMapper {
	List<Review> selectByUserId(int userId);
	
	List<Review> selectBySpotId(int spotId);
}
