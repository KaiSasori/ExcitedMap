package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.Spot;
import com.excitedmap.service.SearchService;

@RestController
@RequestMapping("/search")
public class SearchController {
	@Resource
	private SearchService searchService;

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Spot>> executeSearchSpotByKeyword(@RequestParam String keyword) {
		return new ResponseEntity<List<Spot>>(searchService.searchSpotByKeyword(keyword), HttpStatus.OK);
	}
}
