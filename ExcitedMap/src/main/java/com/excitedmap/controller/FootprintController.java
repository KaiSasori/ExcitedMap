package com.excitedmap.controller;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.excitedmap.pojo.Footprint;
import com.excitedmap.pojo.User;
import com.excitedmap.service.FootprintService;

@RestController
@SessionAttributes("loggedInUser")
@RequestMapping("/footprint")
public class FootprintController {
	@Resource
	private FootprintService footprintService;

	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddFootprint(@ModelAttribute("loggedInUser") User user,
			@RequestBody Footprint footprint) {
		footprint.setUserId(user.getUserId());
		try {
			footprintService.addFootprint(footprint);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		} catch (DuplicateKeyException e) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
	}

	@RequestMapping(method = RequestMethod.DELETE)
	public ResponseEntity<Void> executeDeleteFootprint(@ModelAttribute("loggedInUser") User user,
			@RequestBody Footprint footprint) {
		footprint.setUserId(user.getUserId());
		if (footprintService.deleteFootprint(footprint) == 0) {
			return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
	}
}
