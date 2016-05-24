package com.excitedmap.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.excitedmap.dao.SpotMapperImpl;
import com.excitedmap.pojo.Spot;
import com.excitedmap.dao.SpotPhotoMapperImpl;
import com.excitedmap.pojo.SpotPhoto;
import com.excitedmap.service.SpotService;

@Service("spotService")
public class SpotServiceImpl implements SpotService {
	@Resource
	private SpotMapperImpl spotDao;
	private SpotPhotoMapperImpl spotPhotoDao;
	
	public List<Spot> getSpotBySpotCategoryId(int spotCategoryId){
		return spotDao.selectBySpotCategoryId(spotCategoryId);
	}
	@Override
	public List<Spot> getSpotBySpotId(int spotId) {
		//dao 里面需增加一个返回list的方法
		return null;
	}
	@Override
	public List<Spot> getSpotBySpotNameKeyword(String keyword) {
		return spotDao.selectBySpotNameKeyword(keyword);
	}
	@Override
	public List<Spot> getSpotByFavoriteCountWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByFavoriteCountWithLimit(spotCategoryId, limit);
	}
	@Override
	public List<Spot> getSpotByWishCountWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByWishCountWithLimit(spotCategoryId, limit);
	}
	@Override
	public List<Spot> getSpotByFootprintCountWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByFootprintCountWithLimit(spotCategoryId, limit);
	}
	@Override
	public List<Spot> getSpotByAverageReviewRating(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByAverageReviewRating(spotCategoryId, limit);
	}
	@Override
	public Double getAverageReviewRatingForSpot(int spotId) {
		return spotDao.selectAverageReviewRatingForSpot(spotId);
	}
	@Override
	public List<Map<String, Integer>> getReviewRatingCountForSpot(int spotId) {
		
		return spotDao.selectReviewRatingCountForSpot(spotId);
	}
	@Override
	public List<SpotPhoto> getPhotoBySpotId(int spotId) {
		return spotPhotoDao.selectBySpotId(spotId);
	}
	@Override
	public void addPhoto(SpotPhoto spotPhoto) {
		spotPhotoDao.insertSelective(spotPhoto);
		
	}
    
	
}
