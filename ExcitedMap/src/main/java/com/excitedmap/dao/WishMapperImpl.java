package com.excitedmap.dao;

import java.util.List;

import com.excitedmap.pojo.Wish;

public interface WishMapperImpl extends WishMapper {
	List<Wish> selectByUserId(int userId);
}
