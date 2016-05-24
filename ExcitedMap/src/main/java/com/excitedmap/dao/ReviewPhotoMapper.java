package com.excitedmap.dao;

import com.excitedmap.pojo.ReviewPhoto;

public interface ReviewPhotoMapper {
    int deleteByPrimaryKey(Integer reviewPhotoId);

    int insert(ReviewPhoto record);

    int insertSelective(ReviewPhoto record);

    ReviewPhoto selectByPrimaryKey(Integer reviewPhotoId);

    int updateByPrimaryKeySelective(ReviewPhoto record);

    int updateByPrimaryKey(ReviewPhoto record);
}