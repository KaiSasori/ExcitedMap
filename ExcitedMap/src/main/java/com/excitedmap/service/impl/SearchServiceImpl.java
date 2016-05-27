package com.excitedmap.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.excitedmap.dao.SearchHistoryMapperImpl;
import com.excitedmap.dao.SpotMapperImpl;
import com.excitedmap.pojo.SearchHistory;
import com.excitedmap.pojo.Spot;
import com.excitedmap.service.SearchService;

@Service("searchService")
public class SearchServiceImpl implements SearchService {
	@Resource
	private SearchHistoryMapperImpl searchHistoryDao;
	@Resource
	private SpotMapperImpl spotDao;
	
	public List<SearchHistory> getSearchHistoryListByUserId(int userId, String keyword, int limit) {
		return searchHistoryDao.selectByUserIdAndKeywordWithLimit(userId, keyword, limit);
	}
	
	public List<Spot> searchSpotByKeyword(String keyword) {
		SearchHistory searchHistory = new SearchHistory();
		// 此处暂未设置userId.
		searchHistory.setUserId(null);
		searchHistory.setSearchText(keyword);
		searchHistoryDao.insertSelective(searchHistory);
		return spotDao.selectBySpotNameKeyword(keyword);
	}

}
