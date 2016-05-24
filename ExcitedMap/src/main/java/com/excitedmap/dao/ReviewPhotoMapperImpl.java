package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.ReviewPhoto;

public interface ReviewPhotoMapperImpl extends ReviewPhotoMapper {
	List<ReviewPhoto> selectByReviewId(int reviewId);
}
