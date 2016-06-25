package com.excitedmap.service;

import java.util.List;
import java.util.Map;

import com.excitedmap.pojo.Spot;
import com.excitedmap.pojo.SpotCategory;
import com.excitedmap.pojo.SpotErrorReport;
import com.excitedmap.pojo.SpotImpl;
import com.excitedmap.pojo.SpotLabel;
import com.excitedmap.pojo.SpotPhoto;
import com.excitedmap.pojo.SpotVideo;

public interface SpotService {
	public Spot getSpotBySpotId(int spotId);
	
	public List<Spot> getSpotListBySpotCategoryId(int spotCategoryId);

	public List<SpotImpl> getSpotListOrderByFavoriteCountWithLimit(int spotCategoryId, int limit);

	public List<SpotImpl> getSpotListOrderByWishCountWithLimit(int spotCategoryId, int limit);

	public List<SpotImpl> getSpotListOrderByFootprintCountWithLimit(int spotCategoryId, int limit);

	public List<SpotImpl> getSpotListOrderByAverageReviewRatingWithLimit(int spotCategoryId, int limit);

	public List<SpotImpl> getSpotListOrderByPopularityWithLimit(int spotCategoryId, int limit);

	public Double getAverageReviewRatingForSpot(int spotId);

	public List<Map<String, Integer>> getReviewRatingCountForSpot(int spotId);

	public List<SpotPhoto> getPhotoListBySpotId(int spotId);

	public void reportSpotError(SpotErrorReport spotErrorReport);

	public List<SpotVideo> getVideoListBySpotId(int spotId);

	public List<SpotLabel> getSpotLabelListBySpotId(int spotId);

	public List<SpotCategory> getSpotCategoryList();
}