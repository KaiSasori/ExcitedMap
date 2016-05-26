package com.excitedmap.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.excitedmap.dao.SpotMapperImpl;
import com.excitedmap.pojo.Spot;
import com.excitedmap.pojo.SpotPhoto;
import com.excitedmap.dao.SpotPhotoMapperImpl;
import com.excitedmap.service.SpotService;

@Service("spotService")
public class SpotServiceImpl implements SpotService {
	@Resource
	private SpotMapperImpl spotDao;
	@Resource
	private SpotPhotoMapperImpl spotPhotoDao;

	@Override
	public Spot getSpotBySpotId(int spotId) {
		return spotDao.selectByPrimaryKey(spotId);
	}

	@Override
	public List<Spot> getSpotListBySpotNameKeyword(String keyword) {
		return spotDao.selectBySpotNameKeyword(keyword);
	}

	@Override
	public List<Spot> getSpotListBySpotCategoryId(int spotCategoryId) {
		return spotDao.selectBySpotCategoryId(spotCategoryId);
	}

	@Override
	public List<Spot> getSpotListOrderByFavoriteCountWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByFavoriteCountWithLimit(spotCategoryId, limit);
	}

	@Override
	public List<Spot> getSpotListOrderByWishCountWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByWishCountWithLimit(spotCategoryId, limit);
	}

	@Override
	public List<Spot> getSpotListOrderByFootprintCountWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByFootprintCountWithLimit(spotCategoryId, limit);
	}

	@Override
	public List<Spot> getSpotListOrderByAverageReviewRatingWithLimit(int spotCategoryId, int limit) {
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
	public List<SpotPhoto> getPhotoListBySpotId(int spotId) {
		return spotPhotoDao.selectBySpotId(spotId);
	}

}
