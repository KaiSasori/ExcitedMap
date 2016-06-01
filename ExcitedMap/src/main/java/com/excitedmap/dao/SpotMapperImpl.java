package com.excitedmap.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;

import com.excitedmap.pojo.Spot;
import com.excitedmap.pojo.SpotImpl;

public interface SpotMapperImpl extends SpotMapper {
	List<Spot> selectBySpotCategoryId(int spotCategoryId);

	List<SpotImpl> selectByOrderByFavoriteCountWithLimit(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);

	List<SpotImpl> selectByOrderByWishCountWithLimit(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);

	List<SpotImpl> selectByOrderByFootprintCountWithLimit(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);

	List<SpotImpl> selectByOrderByAverageReviewRating(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);
	
	List<SpotImpl> selectByOrderByPopularity(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);

	List<Spot> selectBySpotNameKeyword(String keyword);
	
	Double selectAverageReviewRatingForSpot(int spotId);
	
	List<Map<String, Integer>> selectReviewRatingCountForSpot(int spotId);
}
