package com.excitedmap.service;

import java.util.List;

import com.excitedmap.pojo.SpotQuestion;
import com.excitedmap.pojo.SpotQuestionAnswer;
import com.excitedmap.pojo.SpotQuestionnaire;

public interface SpotQuestionnaireService {
	void addSpotQuestionAnswerList(int userId, List<SpotQuestionAnswer> spotQuestionAnswerList);

	List<SpotQuestionnaire> getSpotQuestionnaireListBySpotId(int spotId);

	List<SpotQuestion> getSpotQuestionListBySpotQuestionnaireId(int spotQuestionnaireId);
}
