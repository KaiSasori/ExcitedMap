package com.excitedmap.dao;

import com.excitedmap.pojo.SpotVideo;

public interface SpotVideoMapper {
    int deleteByPrimaryKey(Integer spotVideoId);

    int insert(SpotVideo record);

    int insertSelective(SpotVideo record);

    SpotVideo selectByPrimaryKey(Integer spotVideoId);

    int updateByPrimaryKeySelective(SpotVideo record);

    int updateByPrimaryKeyWithBLOBs(SpotVideo record);

    int updateByPrimaryKey(SpotVideo record);
}