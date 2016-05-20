package com.excitedmap.dao;

import com.excitedmap.pojo.SearchHistory;

public interface SearchHistoryMapper {
    int deleteByPrimaryKey(Integer searchHistoryId);

    int insert(SearchHistory record);

    int insertSelective(SearchHistory record);

    SearchHistory selectByPrimaryKey(Integer searchHistoryId);

    int updateByPrimaryKeySelective(SearchHistory record);

    int updateByPrimaryKey(SearchHistory record);
}