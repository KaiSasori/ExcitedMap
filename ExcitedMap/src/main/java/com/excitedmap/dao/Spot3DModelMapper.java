package com.excitedmap.dao;

import com.excitedmap.pojo.Spot3DModel;

public interface Spot3DModelMapper {
    int deleteByPrimaryKey(Integer spot3dModelId);

    int insert(Spot3DModel record);

    int insertSelective(Spot3DModel record);

    Spot3DModel selectByPrimaryKey(Integer spot3dModelId);

    int updateByPrimaryKeySelective(Spot3DModel record);

    int updateByPrimaryKeyWithBLOBs(Spot3DModel record);

    int updateByPrimaryKey(Spot3DModel record);
}