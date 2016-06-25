package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.Spot3DModel;

public interface Spot3DModelMapperImpl extends Spot3DModelMapper {
	List<Spot3DModel> selectBySpotId(int spotId);
}
