package com.excitedmap.dao;

import com.excitedmap.pojo.SpotQuestionnaire;

public interface SpotQuestionnaireMapper {
    int deleteByPrimaryKey(Integer spotQuestionnaireId);

    int insert(SpotQuestionnaire record);

    int insertSelective(SpotQuestionnaire record);

    SpotQuestionnaire selectByPrimaryKey(Integer spotQuestionnaireId);

    int updateByPrimaryKeySelective(SpotQuestionnaire record);

    int updateByPrimaryKey(SpotQuestionnaire record);
}