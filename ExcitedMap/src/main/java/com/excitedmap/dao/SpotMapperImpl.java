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

	List<SpotImpl> selectByOrderByAverageReviewRatingWithLimit(@Param("spotCategoryId") int spotCategoryId,
			@Param("limit") int limit);

	List<SpotImpl> selectByOrderByPopularity(@Param("spotCategoryId") int spotCategoryId, @Param("limit") int limit);

	List<SpotImpl> selectBySpotNameKeywordOrderByPopularityWithLimit(@Param("keyword") String keyword,
			@Param("limit") int limit);

	List<SpotImpl> selectBySpotNameKeywordOrderByFavoriteCountWithLimit(@Param("keyword") String keyword,
			@Param("limit") int limit);

	List<SpotImpl> selectBySpotNameKeywordOrderByWishCountWithLimit(@Param("keyword") String keyword,
			@Param("limit") int limit);

	List<SpotImpl> selectBySpotNameKeywordOrderByFootprintCountWithLimit(@Param("keyword") String keyword,
			@Param("limit") int limit);

	List<SpotImpl> selectBySpotNameKeywordOrderByAverageReviewRatingWithLimit(@Param("keyword") String keyword,
			@Param("limit") int limit);

	Double selectAverageReviewRatingForSpot(int spotId);

	List<Map<String, Integer>> selectReviewRatingCountForSpot(int spotId);

	List<SpotImpl> selectBySpotNameKeyword(@Param("keyword") String keyword, @Param("limit") int limit);

	List<Spot> selectByCenterPointAndRadius(@Param("midCoordinateX") Double midCoordinateX,
			@Param("midCoordinateY") Double midCoordinateY, @Param("radius") Double radius);

	List<SpotImpl> selectByUserCenterPointAndRadiusOrderByAverageReviewRatingWithLimit(
			@Param("userCoordinateX") Double userCoordinateX, @Param("userCoordinateY") Double userCoordinateY,
			@Param("radius") Double radius, @Param("limit") int limit);

	List<SpotImpl> selectByUserCenterPointAndRadiusOrderByWishCountWithLimit(
			@Param("userCoordinateX") Double userCoordinateX, @Param("userCoordinateY") Double userCoordinateY,
			@Param("radius") Double radius, @Param("limit") int limit);

	List<SpotImpl> selectByUserCenterPointAndRadiusOrderByFavoriteCountWithLimit(
			@Param("userCoordinateX") Double userCoordinateX, @Param("userCoordinateY") Double userCoordinateY,
			@Param("radius") Double radius, @Param("limit") int limit);

	List<SpotImpl> selectByUserCenterPointAndRadiusOrderByFootprintCountWithLimit(
			@Param("userCoordinateX") Double userCoordinateX, @Param("userCoordinateY") Double userCoordinateY,
			@Param("radius") Double radius, @Param("limit") int limit);

	List<SpotImpl> selectByUserCenterPointAndRadiusOrderByPopularityWithLimit(
			@Param("userCoordinateX") Double userCoordinateX, @Param("userCoordinateY") Double userCoordinateY,
			@Param("radius") Double radius, @Param("limit") int limit);
}
