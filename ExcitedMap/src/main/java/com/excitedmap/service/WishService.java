package com.excitedmap.service;

import java.util.List;

import org.springframework.dao.DuplicateKeyException;

import com.excitedmap.pojo.Wish;

public interface WishService {
	public List<Wish> getWishListByUserId(int userId);

	public void addWish(Wish wish) throws DuplicateKeyException;
	
	public int deleteWish(Wish wish);
}