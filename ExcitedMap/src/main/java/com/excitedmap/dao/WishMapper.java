package com.excitedmap.dao;

import com.excitedmap.pojo.Wish;

public interface WishMapper {
    int deleteByPrimaryKey(Integer wishId);

    int insert(Wish record);

    int insertSelective(Wish record);

    Wish selectByPrimaryKey(Integer wishId);

    int updateByPrimaryKeySelective(Wish record);

    int updateByPrimaryKey(Wish record);
}