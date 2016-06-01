package com.excitedmap.service.impl;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.excitedmap.dao.SpotLabelMapperImpl;
import com.excitedmap.pojo.SpotLabel;
import com.excitedmap.service.SpotLabelService;

@Service("spotLabelService")
public class SpotLabelServiceImpl implements SpotLabelService {
	@Resource
	private SpotLabelMapperImpl spotLabelDao;

	@Override
	public void addSpotLabel(SpotLabel spotLabel) {
		spotLabel.setSpotLabelId(null);
		spotLabelDao.insertSelective(spotLabel);
	}

}
