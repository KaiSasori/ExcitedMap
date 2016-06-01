package com.excitedmap.service.impl;

import java.util.List;
import java.util.Map;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.excitedmap.dao.SpotErrorReportMapper;
import com.excitedmap.dao.SpotLabelMapperImpl;
import com.excitedmap.dao.SpotMapperImpl;
import com.excitedmap.pojo.Spot;
import com.excitedmap.pojo.SpotErrorReport;
import com.excitedmap.pojo.SpotImpl;
import com.excitedmap.pojo.SpotLabel;
import com.excitedmap.pojo.SpotPhoto;
import com.excitedmap.pojo.SpotVideo;
import com.excitedmap.dao.SpotPhotoMapperImpl;
import com.excitedmap.dao.SpotVideoMapperImpl;
import com.excitedmap.service.SpotService;

@Service("spotService")
public class SpotServiceImpl implements SpotService {
	@Resource
	private SpotMapperImpl spotDao;
	@Resource
	private SpotPhotoMapperImpl spotPhotoDao;
	@Resource
	private SpotErrorReportMapper spotErrorReportDao;
	@Resource
	private SpotVideoMapperImpl spotVideoDao;
	@Resource
	private SpotLabelMapperImpl spotLabelDao;

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
	public List<SpotImpl> getSpotListOrderByFavoriteCountWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByFavoriteCountWithLimit(spotCategoryId, limit);
	}

	@Override
	public List<SpotImpl> getSpotListOrderByWishCountWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByWishCountWithLimit(spotCategoryId, limit);
	}

	@Override
	public List<SpotImpl> getSpotListOrderByFootprintCountWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByFootprintCountWithLimit(spotCategoryId, limit);
	}

	@Override
	public List<SpotImpl> getSpotListOrderByAverageReviewRatingWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByAverageReviewRating(spotCategoryId, limit);
	}
	
	@Override
	public List<SpotImpl> getSpotListOrderByPopularityWithLimit(int spotCategoryId, int limit) {
		return spotDao.selectByOrderByPopularity(spotCategoryId, limit);
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
	
	@Override
	public List<SpotVideo> getVideoListBySpotId(int spotId) {
		return spotVideoDao.selectBySpotId(spotId);
	}
	
	@Override
	public List<SpotLabel> getSpotLabelListBySpotId(int spotId) {
		return spotLabelDao.selectBySpotId(spotId);
	}

	@Override
	public void reportSpotError(SpotErrorReport spotErrorReport) {
		spotErrorReport.setSpotErrorReportId(null);
		spotErrorReportDao.insertSelective(spotErrorReport);
	}

}
