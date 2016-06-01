package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.SpotQuestionAnswer;
import com.excitedmap.service.SpotQuestionnaireService;

@RestController
@RequestMapping("/spotQuestionAnswer")
public class SpotQuestionAnswerController {
	@Resource
	private SpotQuestionnaireService spotQuestionnaireService;
	
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddSpotQuestionAnswerList(@RequestBody List<SpotQuestionAnswer> spotQuestionAnswerList) {
		spotQuestionnaireService.addSpotQuestionAnswerList(spotQuestionAnswerList);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
