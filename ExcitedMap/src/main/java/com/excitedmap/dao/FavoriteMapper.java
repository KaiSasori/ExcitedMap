package com.excitedmap.dao;

import com.excitedmap.pojo.Favorite;

public interface FavoriteMapper {
    int deleteByPrimaryKey(Integer favoriteId);

    int insert(Favorite record);

    int insertSelective(Favorite record);

    Favorite selectByPrimaryKey(Integer favoriteId);

    int updateByPrimaryKeySelective(Favorite record);

    int updateByPrimaryKey(Favorite record);
}