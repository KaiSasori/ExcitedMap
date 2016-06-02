package com.excitedmap.controller;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.SpotImpl;
import com.excitedmap.service.SearchService;

@RestController
@RequestMapping("/search")
public class SearchController {
	@Resource
	private SearchService searchService;

	@RequestMapping(value = "/spotList", method = RequestMethod.GET)
	public ResponseEntity<List<SpotImpl>> executeSearchSpotByKeyword(@RequestParam String keyword,
			@RequestParam int limit, @RequestParam String orderby) {
		if (orderby.equals("averageReviewRating")) {
			return new ResponseEntity<List<SpotImpl>>(
					searchService.searchSpotByKeywordOrderByAverageReviewRatingWithLimit(keyword, limit),
					HttpStatus.OK);
		} else if (orderby.equals("wishCount")) {
			return new ResponseEntity<List<SpotImpl>>(
					searchService.searchSpotByKeywordOrderByWishCountWithLimit(keyword, limit), HttpStatus.OK);
		} else if (orderby.equals("favoriteCount")) {
			return new ResponseEntity<List<SpotImpl>>(
					searchService.searchSpotByKeywordOrderByFavoriteCountWithLimit(keyword, limit), HttpStatus.OK);
		} else if (orderby.equals("footprintCount")) {
			return new ResponseEntity<List<SpotImpl>>(
					searchService.searchSpotByKeywordOrderByFootprintCountWithLimit(keyword, limit), HttpStatus.OK);
		} else if (orderby.equals("popularity")) {
			return new ResponseEntity<List<SpotImpl>>(
					searchService.searchSpotByKeywordOrderByPopularityWithLimit(keyword, limit), HttpStatus.OK);
		}
		return new ResponseEntity<List<SpotImpl>>(HttpStatus.NOT_FOUND);
	}
}
