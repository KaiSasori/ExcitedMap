package com.excitedmap.dao;

import com.excitedmap.pojo.SpotQuestionnaireQuestionChoice;

public interface SpotQuestionnaireQuestionChoiceMapper {
    int deleteByPrimaryKey(Integer spotQuestionnaireQuestionChoiceId);

    int insert(SpotQuestionnaireQuestionChoice record);

    int insertSelective(SpotQuestionnaireQuestionChoice record);

    SpotQuestionnaireQuestionChoice selectByPrimaryKey(Integer spotQuestionnaireQuestionChoiceId);

    int updateByPrimaryKeySelective(SpotQuestionnaireQuestionChoice record);

    int updateByPrimaryKey(SpotQuestionnaireQuestionChoice record);
}