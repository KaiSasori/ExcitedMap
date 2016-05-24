package com.excitedmap.dao;

import com.excitedmap.pojo.SpotPhoto;

public interface SpotPhotoMapper {
    int deleteByPrimaryKey(Integer spotPhotoId);

    int insert(SpotPhoto record);

    int insertSelective(SpotPhoto record);

    SpotPhoto selectByPrimaryKey(Integer spotPhotoId);

    int updateByPrimaryKeySelective(SpotPhoto record);

    int updateByPrimaryKey(SpotPhoto record);
}