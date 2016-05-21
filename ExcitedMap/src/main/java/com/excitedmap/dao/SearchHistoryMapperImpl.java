package com.excitedmap.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.excitedmap.pojo.SearchHistory;

public interface SearchHistoryMapperImpl extends SearchHistoryMapper {
	List<SearchHistory> selectByUserIdAndKeywordWithLimit(@Param("userId") int userId, @Param("keyword") String keyword,
			@Param("limit") int limit);
}
