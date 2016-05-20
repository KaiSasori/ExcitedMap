package com.excitedmap.dao;

import com.excitedmap.pojo.Spot;

public interface SpotMapper {
    int deleteByPrimaryKey(Integer spotId);

    int insert(Spot record);

    int insertSelective(Spot record);

    Spot selectByPrimaryKey(Integer spotId);

    int updateByPrimaryKeySelective(Spot record);

    int updateByPrimaryKeyWithBLOBs(Spot record);

    int updateByPrimaryKey(Spot record);
}