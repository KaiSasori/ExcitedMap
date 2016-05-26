package com.excitedmap.controller;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.excitedmap.pojo.Spot;
import com.excitedmap.service.SpotService;
import com.excitedmap.pojo.SpotPhoto;


@RestController
@RequestMapping("/spot")
public class SpotController {
	@Resource
	private SpotService spotService;
/*
	//此方法暂时无法使用，如需添加景点，请直接在数据库spot表里手动添加
	@RequestMapping(method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddSpot(@RequestBody Spot spot) {
		
			//spotService.addSpot(spot);
			return new ResponseEntity<Void>(HttpStatus.CREATED);
		
	}
*/
	@RequestMapping(value="/spotList",method = RequestMethod.GET)
	public ResponseEntity<List<Spot>> executeGetSpotBySpotNameKeyword(@RequestParam String keyword) {
		return new ResponseEntity<List<Spot>>(spotService.getSpotBySpotNameKeyword(keyword), HttpStatus.OK);
	}
	/*
	@RequestMapping(value="/spotListTest",method = RequestMethod.GET)
	public ResponseEntity<Spot> executeGetSpotBySpotId(@RequestParam int spotId) {
		return new ResponseEntity<Spot>(spotService.getSpotBySpotId(spotId), HttpStatus.OK);
	}
	*/
	
	@RequestMapping(value="/spotCategory/{spotCategoryId}/spotListOrderByFavoriteCountWithLimit",method = RequestMethod.GET)
	public ResponseEntity<List<Spot>> executeGetSpotByFavoriteCountWithLimit( @PathVariable int spotCategoryId, @RequestParam int limit) {
		return new ResponseEntity<List<Spot>>(spotService.getSpotByFavoriteCountWithLimit(spotCategoryId,limit),HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/spotCategory/{spotCategoryId}/spotListOrderByWishCountWithLimit",method = RequestMethod.GET)
	public ResponseEntity<List<Spot>> executeGetSpotByWishCountWithLimit(@PathVariable int spotCategoryId, @RequestParam int limit) {
		return new ResponseEntity<List<Spot>>(spotService.getSpotByWishCountWithLimit(spotCategoryId,limit),HttpStatus.CREATED);
		
	}
	
	@RequestMapping(value="/spotCategory/{spotCategoryId}/spotListOrderByFootprintCountWithLimit",method = RequestMethod.GET)
	public ResponseEntity<List<Spot>> executeGetSpotByFootprintCountWithLimit(@PathVariable int spotCategoryId, @RequestParam int limit) {
		return new ResponseEntity<List<Spot>>(spotService.getSpotByFavoriteCountWithLimit(spotCategoryId,limit),HttpStatus.CREATED);
	}
	@RequestMapping(value="/spotCategory/{spotCategoryId}/spotListOrderByAverageReviewRatingWithLimit",method = RequestMethod.GET)
	public ResponseEntity<List<Spot>> executeGetSpotByAverageReviewRatingWithLimit(@PathVariable int spotCategoryId, @RequestParam int limit) {
		return new ResponseEntity<List<Spot>>(spotService.getSpotByAverageReviewRating(spotCategoryId,limit),HttpStatus.CREATED);
		
	}
	
	@RequestMapping(value="/{spotId}/photo",method = RequestMethod.GET)
	public ResponseEntity<List<SpotPhoto>> executeGetPhotoBySpotId(@PathVariable int spotId) {
		return new ResponseEntity<List<SpotPhoto>>(spotService.getPhotoBySpotId(spotId),HttpStatus.CREATED);
	}
	
	@RequestMapping(value="/{spotId}/reviewRating",method = RequestMethod.GET)
	public ResponseEntity<List<Map<String, Integer>>> executeGetReviewRatingCountForSpot(@PathVariable int spotId) {
		return new ResponseEntity<List<Map<String, Integer>>>(spotService.getReviewRatingCountForSpot(spotId),HttpStatus.CREATED);
		
	}
	
	@RequestMapping(value="/{spotId}/averageReviewRatingForSpot",method = RequestMethod.GET)
	public ResponseEntity<Double> executeGetAverageReviewRatingForSpot(@PathVariable int spotId) {
		return new ResponseEntity<Double>(spotService.getAverageReviewRatingForSpot(spotId),HttpStatus.CREATED);
		
	}
	@RequestMapping(value="/photo",method = RequestMethod.PUT)
	public ResponseEntity<Void> executeAddPhoto(@RequestBody SpotPhoto spotPhoto) {
		spotService.addPhoto(spotPhoto);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}
	
	
}
