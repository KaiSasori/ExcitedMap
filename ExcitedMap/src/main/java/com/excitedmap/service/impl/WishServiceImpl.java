package com.excitedmap.service.impl;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.dao.DuplicateKeyException;
import org.springframework.stereotype.Service;

import com.excitedmap.dao.WishMapperImpl;
import com.excitedmap.pojo.Wish;
import com.excitedmap.service.WishService;

@Service("wishService")
public class WishServiceImpl implements WishService {
	@Resource
	private WishMapperImpl wishDao;

	public List<Wish> getWishByUserId(int userId) {
		return wishDao.selectByUserId(userId);
	}

	public void addWish(Wish wish) throws DuplicateKeyException {
		wishDao.insertSelective(wish);
	}

	public void deleteWish(Wish wish) {
		wishDao.deleteByPrimaryKey(wish.getWishId());
	}

}
