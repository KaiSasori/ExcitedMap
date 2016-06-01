package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.SpotVideo;

public interface SpotVideoMapperImpl extends SpotVideoMapper {
	List<SpotVideo> selectBySpotId(int spotId);
}
