package com.excitedmap.service;

import java.util.List;
import java.util.Map;

import com.excitedmap.pojo.Spot;
import com.excitedmap.pojo.SpotPhoto;


public interface SpotService {
	public List<Spot> getSpotBySpotId(int spotId);
	public List<Spot> getSpotBySpotNameKeyword(String keyword);
	public List<Spot> getSpotBySpotCategoryId(int spotCategoryId);
	
	//public void addSpot(Spot spot);
	public List<Spot> getSpotByFavoriteCountWithLimit(int spotCategoryId, int limit);
	public List<Spot> getSpotByWishCountWithLimit(int spotCategoryId, int limit);
	public List<Spot> getSpotByFootprintCountWithLimit(int spotCategoryId, int limit);
	public List<Spot> getSpotByAverageReviewRating(int spotCategoryId, int limit);
	public Double getAverageReviewRatingForSpot(int spotId);
	public List<Map<String, Integer>> getReviewRatingCountForSpot(int spotId);
	public List<SpotPhoto> getPhotoBySpotId(int spotId);
	public void addPhoto(SpotPhoto spotPhoto);
}