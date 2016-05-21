package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.Spot;

public interface SpotMapperImpl extends SpotMapper {
	List<Spot> selectBySpotCategoryId(int spotCategoryId);
}
