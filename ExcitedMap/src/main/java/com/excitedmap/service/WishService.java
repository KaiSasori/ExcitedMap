package com.excitedmap.service;

import java.util.List;

import org.springframework.dao.DuplicateKeyException;

import com.excitedmap.pojo.Wish;

public interface WishService {
	public List<Wish> getWishByUserId(int userId);

	public void addWish(Wish wish) throws DuplicateKeyException;
	
	public void deleteWish(Wish wish);
}