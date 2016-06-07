package com.excitedmap.controller;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.excitedmap.pojo.SpotLabel;
import com.excitedmap.pojo.User;
import com.excitedmap.service.SpotLabelService;

@RestController
@SessionAttributes("loggedInUser")
@RequestMapping("/spotLabel")
public class SpotLabelController {
	@Resource
	private SpotLabelService spotLabelService;

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddSpotLabel(@ModelAttribute("loggedInUser") User user,
			@RequestBody SpotLabel spotLabel) {
		spotLabel.setUserId(user.getUserId());
		spotLabelService.addSpotLabel(spotLabel);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

}
