package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.SpotQuestionnaire;

public interface SpotQuestionnaireMapperImpl extends SpotQuestionnaireMapper {
	List<SpotQuestionnaire> selectBySpotId(int spotId);
}
