package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.Spot;
import com.excitedmap.service.SpotService;

@RestController
@RequestMapping("/spot")
public class SpotController {
	@Resource
	private SpotService spotService;

	
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddSpot(@RequestBody Spot spot) {
		
			//spotService.addSpot(spot);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Spot>> executeGetSpotBySpotId(@RequestParam int spotId) {
		return new ResponseEntity<List<Spot>>(spotService.getSpotBySpotId(spotId), HttpStatus.OK);
	}

	
}
