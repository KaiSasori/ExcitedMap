package com.excitedmap.dao;

import com.excitedmap.pojo.SpotQuestionnaireQuestion;

public interface SpotQuestionnaireQuestionMapper {
    int deleteByPrimaryKey(Integer spotQuestionnaireQuestionId);

    int insert(SpotQuestionnaireQuestion record);

    int insertSelective(SpotQuestionnaireQuestion record);

    SpotQuestionnaireQuestion selectByPrimaryKey(Integer spotQuestionnaireQuestionId);

    int updateByPrimaryKeySelective(SpotQuestionnaireQuestion record);

    int updateByPrimaryKey(SpotQuestionnaireQuestion record);
}