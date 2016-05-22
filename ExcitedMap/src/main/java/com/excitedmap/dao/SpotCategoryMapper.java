package com.excitedmap.dao;

import com.excitedmap.pojo.SpotCategory;

public interface SpotCategoryMapper {
    int deleteByPrimaryKey(Integer spotCategoryId);

    int insert(SpotCategory record);

    int insertSelective(SpotCategory record);

    SpotCategory selectByPrimaryKey(Integer spotCategoryId);

    int updateByPrimaryKeySelective(SpotCategory record);

    int updateByPrimaryKey(SpotCategory record);
}