package com.excitedmap.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.excitedmap.dao.SpotQuestionAnswerMapper;
import com.excitedmap.dao.SpotQuestionMapperImpl;
import com.excitedmap.dao.SpotQuestionnaireMapperImpl;
import com.excitedmap.pojo.SpotQuestion;
import com.excitedmap.pojo.SpotQuestionAnswer;
import com.excitedmap.pojo.SpotQuestionnaire;
import com.excitedmap.service.SpotQuestionnaireService;

@Service("spotQuestionnaireService")
public class SpotQuestionnaireServiceImpl implements SpotQuestionnaireService {
	@Resource
	private SpotQuestionMapperImpl spotQuestionDao;
	@Resource
	private SpotQuestionnaireMapperImpl spotQuestionnaireDao;
	@Resource
	private SpotQuestionAnswerMapper spotQuestionAnswerDao;

	@Override
	@Transactional
	public void addSpotQuestionAnswerList(int userId, List<SpotQuestionAnswer> spotQuestionAnswerList) {
		for (SpotQuestionAnswer spotQuestionAnswer : spotQuestionAnswerList) {
			spotQuestionAnswer.setUserId(userId);
			spotQuestionAnswerDao.insertSelective(spotQuestionAnswer);
		}
	}

	@Override
	public List<SpotQuestionnaire> getSpotQuestionnaireListBySpotId(int spotId) {
		return spotQuestionnaireDao.selectBySpotId(spotId);
	}

	@Override
	public List<SpotQuestion> getSpotQuestionListBySpotQuestionnaireId(int spotQuestionnaireId) {
		return spotQuestionDao.selectBySpotQuestionnaireId(spotQuestionnaireId);
	}

}
