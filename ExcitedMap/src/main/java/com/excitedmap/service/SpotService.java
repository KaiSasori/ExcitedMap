package com.excitedmap.service;

import java.util.List;
import java.util.Map;

import com.excitedmap.pojo.Spot;
import com.excitedmap.pojo.SpotErrorReport;
import com.excitedmap.pojo.SpotPhoto;

public interface SpotService {
	public Spot getSpotBySpotId(int spotId);

	public List<Spot> getSpotListBySpotNameKeyword(String keyword);

	public List<Spot> getSpotListBySpotCategoryId(int spotCategoryId);

	public List<Spot> getSpotListOrderByFavoriteCountWithLimit(int spotCategoryId, int limit);

	public List<Spot> getSpotListOrderByWishCountWithLimit(int spotCategoryId, int limit);

	public List<Spot> getSpotListOrderByFootprintCountWithLimit(int spotCategoryId, int limit);

	public List<Spot> getSpotListOrderByAverageReviewRatingWithLimit(int spotCategoryId, int limit);

	public Double getAverageReviewRatingForSpot(int spotId);

	public List<Map<String, Integer>> getReviewRatingCountForSpot(int spotId);

	public List<SpotPhoto> getPhotoListBySpotId(int spotId);

	void reportSpotError(SpotErrorReport spotErrorReport);

	public List<Spot> getSpotListOrderByPopularityWithLimit(int spotCategoryId, int limit);
}