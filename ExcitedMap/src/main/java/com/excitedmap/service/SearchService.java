package com.excitedmap.service;

import java.util.List;

import com.excitedmap.pojo.SearchHistory;
import com.excitedmap.pojo.Spot;

public interface SearchService {
	public List<SearchHistory> getSearchHistoryListByUserId(int userId, String keyword, int limit);

	public List<Spot> searchSpotByKeyword(String keyword);
}