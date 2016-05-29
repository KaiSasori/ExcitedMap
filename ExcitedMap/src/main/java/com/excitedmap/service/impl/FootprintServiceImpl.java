package com.excitedmap.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.excitedmap.dao.FootprintMapperImpl;
import com.excitedmap.pojo.Footprint;
import com.excitedmap.service.FootprintService;

@Service("footprintService")
public class FootprintServiceImpl implements FootprintService {
	@Resource
	private FootprintMapperImpl footprintDao;

	public List<Footprint> getFootprintListByUserId(int userId) {
		return footprintDao.selectByUserId(userId);
	}

	public void addFootprint(Footprint footprint) throws DuplicateKeyException {
		footprint.setFootprintId(null);
		footprintDao.insertSelective(footprint);
	}

	public int deleteFootprint(Footprint footprint) {
		return footprintDao.deleteFootprint(footprint);
	}

}
