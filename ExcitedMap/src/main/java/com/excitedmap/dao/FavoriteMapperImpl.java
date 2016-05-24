package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.Favorite;

public interface FavoriteMapperImpl extends FavoriteMapper {
	List<Favorite> selectByUserId(int userId);
}
