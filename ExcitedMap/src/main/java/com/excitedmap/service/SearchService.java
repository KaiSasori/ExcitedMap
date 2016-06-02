package com.excitedmap.service;

import java.util.List;

import com.excitedmap.pojo.SearchHistory;
import com.excitedmap.pojo.SpotImpl;

public interface SearchService {
	public List<SearchHistory> getSearchHistoryListByUserId(int userId, String keyword, int limit);

	public List<SpotImpl> searchSpotByKeywordOrderByPopularityWithLimit(String keyword, int limit);
	
	public List<SpotImpl> searchSpotByKeywordOrderByFavoriteCountWithLimit(String keyword, int limit);
	
	public List<SpotImpl> searchSpotByKeywordOrderByFootprintCountWithLimit(String keyword, int limit);
	
	public List<SpotImpl> searchSpotByKeywordOrderByWishCountWithLimit(String keyword, int limit);

	public List<SpotImpl> searchSpotByKeywordOrderByAverageReviewRatingWithLimit(String keyword, int limit);

}