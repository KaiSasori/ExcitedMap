package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.Spot;

public interface SpotMapperImpl extends SpotMapper {
	List<Spot> selectBySpotCategoryId(int spotCategoryId);

	List<Spot> selectByOrderByFavoriteCountWithLimit(int limit);
	
	List<Spot> selectByOrderByWishCountWithLimit(int limit);
	
	List<Spot> selectByOrderByFootprintCountWithLimit(int limit);
	
	List<Spot> selectByOrderByAverageReviewRating(int limit);
	
	List<Spot> selectBySpotNameKeyword(String keyword);
}
