package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.excitedmap.pojo.SpotQuestionAnswer;
import com.excitedmap.pojo.User;
import com.excitedmap.service.SpotQuestionnaireService;

@RestController
@SessionAttributes("loggedInUser")
@RequestMapping("/spotQuestionAnswer")
public class SpotQuestionAnswerController {
	@Resource
	private SpotQuestionnaireService spotQuestionnaireService;

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddSpotQuestionAnswerList(@ModelAttribute("loggedInUser") User user,
			@RequestBody List<SpotQuestionAnswer> spotQuestionAnswerList) {
		spotQuestionnaireService.addSpotQuestionAnswerList(user.getUserId(), spotQuestionAnswerList);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
