package com.excitedmap.dao;

import com.excitedmap.pojo.SpotQuestion;

public interface SpotQuestionMapper {
    int deleteByPrimaryKey(Integer spotQuestionId);

    int insert(SpotQuestion record);

    int insertSelective(SpotQuestion record);

    SpotQuestion selectByPrimaryKey(Integer spotQuestionId);

    int updateByPrimaryKeySelective(SpotQuestion record);

    int updateByPrimaryKey(SpotQuestion record);
}