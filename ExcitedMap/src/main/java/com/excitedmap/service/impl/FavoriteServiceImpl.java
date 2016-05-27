package com.excitedmap.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.excitedmap.dao.FavoriteMapperImpl;
import com.excitedmap.pojo.Favorite;
import com.excitedmap.service.FavoriteService;

@Service("favoriteService")
public class FavoriteServiceImpl implements FavoriteService {
	@Resource
	private FavoriteMapperImpl favoriteDao;

	public List<Favorite> getFavoriteByUserId(int userId) {
		return favoriteDao.selectByUserId(userId);
	}

	public void addFavorite(Favorite favorite) throws DuplicateKeyException {
		favorite.setFavoriteId(null);
		favoriteDao.insertSelective(favorite);
	}

	public void deleteFavorite(Favorite favorite) {
		favoriteDao.deleteFavorite(favorite);
	}

}
