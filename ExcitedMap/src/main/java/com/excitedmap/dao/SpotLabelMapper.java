package com.excitedmap.dao;

import com.excitedmap.pojo.SpotLabel;

public interface SpotLabelMapper {
    int deleteByPrimaryKey(Integer spotLabelId);

    int insert(SpotLabel record);

    int insertSelective(SpotLabel record);

    SpotLabel selectByPrimaryKey(Integer spotLabelId);

    int updateByPrimaryKeySelective(SpotLabel record);

    int updateByPrimaryKey(SpotLabel record);
}