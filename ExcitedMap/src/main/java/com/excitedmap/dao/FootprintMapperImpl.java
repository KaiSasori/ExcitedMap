package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.Footprint;

public interface FootprintMapperImpl extends FootprintMapper {
	List<Footprint> selectByUserId(int userId);
}
