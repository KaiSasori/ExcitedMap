package com.excitedmap.service;

import java.util.List;

import org.springframework.dao.DuplicateKeyException;

import com.excitedmap.pojo.SearchHistory;

public interface SearchHistoryService {
	public List<SearchHistory> getSearchHistoryByUserId(int userId, String keyword, int limit);

	public void addSearchHistory(SearchHistory searchHistory) throws DuplicateKeyException;

}