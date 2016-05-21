package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.SearchHistory;
import com.excitedmap.service.SearchHistoryService;

@RestController
@RequestMapping("/searchHistory")
public class SearchHistoryController {
	@Resource
	private SearchHistoryService searchHistoryService;

	// 插入搜索记录，SQL处还没有做Duplicate限制，先假装有限制。
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddSearchHistory(@RequestBody SearchHistory searchHistory) {
		try {
			searchHistoryService.addSearchHistory(searchHistory);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (DuplicateKeyException e) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}

	// 获得用户的搜索记录，条数限制为limit，string可以为空，
	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<SearchHistory>> executeGetSearchHistoryByUserId(@RequestParam int userId, String keyword,
			int limit) {
		return new ResponseEntity<List<SearchHistory>>(
				searchHistoryService.getSearchHistoryByUserId(userId, keyword, limit), HttpStatus.OK);
	}

}
