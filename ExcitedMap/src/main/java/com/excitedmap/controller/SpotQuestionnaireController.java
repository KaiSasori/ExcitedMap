package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.SpotQuestion;
import com.excitedmap.service.SpotQuestionnaireService;

@RestController
@RequestMapping("/spotQuestionnaire")
public class SpotQuestionnaireController {
	@Resource
	private SpotQuestionnaireService spotQuestionnaireService;

	@RequestMapping(value = "/{spotQuestionnaireId}/questionList", method = RequestMethod.GET)
	public List<SpotQuestion> executeGetSpotQuestionListBySpotQuestionnaireId(@PathVariable int spotQuestionnaireId) {
		return spotQuestionnaireService.getSpotQuestionListBySpotQuestionnaireId(spotQuestionnaireId);
	}

}
