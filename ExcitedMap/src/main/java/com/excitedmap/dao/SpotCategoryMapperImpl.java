package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.SpotCategory;

public interface SpotCategoryMapperImpl extends SpotCategoryMapper {
	List<SpotCategory> selectAllSpotCategories();
}
