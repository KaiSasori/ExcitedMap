package com.excitedmap.dao;

import java.util.List;
import com.excitedmap.pojo.SpotLabel;

public interface SpotLabelMapperImpl extends SpotLabelMapper {
	List<SpotLabel> selectBySpotId(int spotId);
}
