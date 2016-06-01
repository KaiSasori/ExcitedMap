package com.excitedmap.controller;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.SpotLabel;
import com.excitedmap.service.SpotLabelService;

@RestController
@RequestMapping("/spotLabel")
public class SpotLabelController {
	@Resource
	private SpotLabelService spotLabelService;

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddSpotLabel(@RequestBody SpotLabel spotLabel) {
		spotLabelService.addSpotLabel(spotLabel);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

}
