package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.SpotQuestion;

public interface SpotQuestionMapperImpl extends SpotQuestionMapper {
	List<SpotQuestion> selectBySpotQuestionnaireId(int spotQuestionnaireId);
}