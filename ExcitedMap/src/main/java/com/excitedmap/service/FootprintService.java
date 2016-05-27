package com.excitedmap.service;

import java.util.List;

import org.springframework.dao.DuplicateKeyException;

import com.excitedmap.pojo.Footprint;

public interface FootprintService {
	public List<Footprint> getFootprintListByUserId(int userId);

	public void addFootprint(Footprint footprint) throws DuplicateKeyException;

	public void deleteFootprint(Footprint footprint);
}