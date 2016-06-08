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

	@Override
	public List<Favorite> getFavoriteListByUserId(int userId) {
		return favoriteDao.selectByUserId(userId);
	}

	@Override
	public void addFavorite(Favorite favorite) throws DuplicateKeyException {
		favoriteDao.insertSelective(favorite);
	}

	@Override
	public int deleteFavorite(Favorite favorite) {
		return favoriteDao.deleteFavorite(favorite);
	}

}
