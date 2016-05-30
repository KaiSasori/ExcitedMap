package com.excitedmap.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.excitedmap.pojo.Spot;

public interface SpotMapperImpl extends SpotMapper {
	List<Spot> selectBySpotCategoryId(int spotCategoryId);

	List<Spot> selectByOrderByFavoriteCountWithLimit(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);

	List<Spot> selectByOrderByWishCountWithLimit(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);

	List<Spot> selectByOrderByFootprintCountWithLimit(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);

	List<Spot> selectByOrderByAverageReviewRating(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);
	
	List<Spot> selectByOrderByPopularity(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);

	List<Spot> selectBySpotNameKeyword(String keyword);
	
	Double selectAverageReviewRatingForSpot(int spotId);
	
	List<Map<String, Integer>> selectReviewRatingCountForSpot(int spotId);
}
