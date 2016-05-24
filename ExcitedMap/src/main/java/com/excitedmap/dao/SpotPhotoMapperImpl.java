package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.SpotPhoto;

public interface SpotPhotoMapperImpl extends SpotPhotoMapper {
	List<SpotPhoto> selectBySpotId(int spotId);
}
