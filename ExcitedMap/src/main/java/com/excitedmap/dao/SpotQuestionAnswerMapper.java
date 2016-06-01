package com.excitedmap.dao;

import com.excitedmap.pojo.SpotQuestionAnswer;

public interface SpotQuestionAnswerMapper {
    int deleteByPrimaryKey(Integer spotQuestionAnswerId);

    int insert(SpotQuestionAnswer record);

    int insertSelective(SpotQuestionAnswer record);

    SpotQuestionAnswer selectByPrimaryKey(Integer spotQuestionAnswerId);

    int updateByPrimaryKeySelective(SpotQuestionAnswer record);

    int updateByPrimaryKey(SpotQuestionAnswer record);
}