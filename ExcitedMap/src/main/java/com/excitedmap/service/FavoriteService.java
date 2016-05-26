package com.excitedmap.service;

import java.util.List;

import org.springframework.dao.DuplicateKeyException;

import com.excitedmap.pojo.Favorite;

public interface FavoriteService {
	public List<Favorite> getFavoriteByUserId(int userId);

	public void addFavorite(Favorite favorite) throws DuplicateKeyException;

	public void deleteFavorite(int favoriteId);
}