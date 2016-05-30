package com.excitedmap.controller;

import java.util.ArrayList;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.Spot;
import com.excitedmap.pojo.SpotErrorReport;
import com.excitedmap.pojo.SpotImpl;
import com.excitedmap.pojo.SpotPhoto;
import com.excitedmap.service.SpotService;

@RestController
@RequestMapping("/spot")
public class SpotController {
	@Resource
	private SpotService spotService;

	@RequestMapping(value = "/{spotId}", method = RequestMethod.GET)
	public ResponseEntity<Spot> executeGetSpotBySpotId(@PathVariable int spotId) {
		return new ResponseEntity<Spot>(spotService.getSpotBySpotId(spotId), HttpStatus.OK);
	}

	@RequestMapping(value = "/{spotId}/reviewRating", method = RequestMethod.GET)
	public ResponseEntity<List<Object>> executeGetReviewRatingForSpot(@PathVariable int spotId) {
		List<Object> returnList = new ArrayList<Object>();
		returnList.add(spotService.getAverageReviewRatingForSpot(spotId));
		returnList.add(spotService.getReviewRatingCountForSpot(spotId));
		return new ResponseEntity<List<Object>>(returnList, HttpStatus.OK);
	}

	@RequestMapping(value = "/{spotId}/photo", method = RequestMethod.GET)
	public ResponseEntity<List<SpotPhoto>> executeGetPhotoListBySpotId(@PathVariable int spotId) {
		return new ResponseEntity<List<SpotPhoto>>(spotService.getPhotoListBySpotId(spotId), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/reportError", method = RequestMethod.PUT)
	public ResponseEntity<Void> executeReportSpotError(@RequestBody SpotErrorReport spotErrorReport) {
		spotService.reportSpotError(spotErrorReport);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@RequestMapping(method = RequestMethod.GET)
	public ResponseEntity<List<Spot>> executeGetSpotListBySpotNameKeyword(@RequestParam String keyword) {
		return new ResponseEntity<List<Spot>>(spotService.getSpotListBySpotNameKeyword(keyword), HttpStatus.OK);
	}

	@RequestMapping(value = "/category/{spotCategoryId}", method = RequestMethod.GET)
	public ResponseEntity<List<Spot>> executeGetSpotListBySpotCategoryId(@PathVariable int spotCategoryId) {
		return new ResponseEntity<List<Spot>>(spotService.getSpotListBySpotCategoryId(spotCategoryId), HttpStatus.OK);
	}

	@RequestMapping(value = "/category/{spotCategoryId}/spotListOrderByFavoriteCountWithLimit", method = RequestMethod.GET)
	public ResponseEntity<List<SpotImpl>> executeGetSpotListOrderByFavoriteCountWithLimit(@PathVariable int spotCategoryId,
			@RequestParam int limit) {
		return new ResponseEntity<List<SpotImpl>>(
				spotService.getSpotListOrderByFavoriteCountWithLimit(spotCategoryId, limit), HttpStatus.OK);
	}

	@RequestMapping(value = "/category/{spotCategoryId}/spotListOrderByWishCountWithLimit", method = RequestMethod.GET)
	public ResponseEntity<List<SpotImpl>> executeGetSpotListOrderByWishCountWithLimit(@PathVariable int spotCategoryId,
			@RequestParam int limit) {
		return new ResponseEntity<List<SpotImpl>>(spotService.getSpotListOrderByWishCountWithLimit(spotCategoryId, limit),
				HttpStatus.OK);

	}

	@RequestMapping(value = "/category/{spotCategoryId}/spotListOrderByFootprintCountWithLimit", method = RequestMethod.GET)
	public ResponseEntity<List<SpotImpl>> executeGetSpotListOrderByFootprintCountWithLimit(@PathVariable int spotCategoryId,
			@RequestParam int limit) {
		return new ResponseEntity<List<SpotImpl>>(
				spotService.getSpotListOrderByFootprintCountWithLimit(spotCategoryId, limit), HttpStatus.OK);
	}

	@RequestMapping(value = "/category/{spotCategoryId}/spotListOrderByAverageReviewRatingWithLimit", method = RequestMethod.GET)
	public ResponseEntity<List<SpotImpl>> executeGetSpotListOrderByAverageReviewRatingWithLimit(
			@PathVariable int spotCategoryId, @RequestParam int limit) {
		return new ResponseEntity<List<SpotImpl>>(
				spotService.getSpotListOrderByAverageReviewRatingWithLimit(spotCategoryId, limit), HttpStatus.OK);
	}
	
	@RequestMapping(value = "/category/{spotCategoryId}/spotListOrderByPopularityWithLimit", method = RequestMethod.GET)
	public ResponseEntity<List<SpotImpl>> executeGetSpotListOrderByPopularityWithLimit(
			@PathVariable int spotCategoryId, @RequestParam int limit) {
		return new ResponseEntity<List<SpotImpl>>(
				spotService.getSpotListOrderByPopularityWithLimit(spotCategoryId, limit), HttpStatus.OK);
	}

}
