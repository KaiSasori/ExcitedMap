package com.excitedmap.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.excitedmap.dao.SearchHistoryMapperImpl;
import com.excitedmap.pojo.SearchHistory;
import com.excitedmap.service.SearchHistoryService;

@Service("searchHistoryService")
public class SearchHistoryServiceImpl implements SearchHistoryService {
	@Resource
	private SearchHistoryMapperImpl searchHistoryDao;

	public List<SearchHistory> getSearchHistoryByUserId(int userId, String keyword, int limit) {
		return searchHistoryDao.selectByUserIdAndKeywordWithLimit(userId, keyword, limit);
	}

	public void addSearchHistory(SearchHistory searchHistory) throws DuplicateKeyException {
		searchHistoryDao.insertSelective(searchHistory);
	}

}
