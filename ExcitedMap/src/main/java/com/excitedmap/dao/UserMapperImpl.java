package com.excitedmap.dao;

import com.excitedmap.pojo.User;

public interface UserMapperImpl extends UserMapper {
	User selectByEmailAndPassword(User user);
	User selectByOpenId(String openId);
}
