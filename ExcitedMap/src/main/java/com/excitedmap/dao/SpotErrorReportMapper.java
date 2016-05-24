package com.excitedmap.dao;

import com.excitedmap.pojo.SpotErrorReport;

public interface SpotErrorReportMapper {
    int deleteByPrimaryKey(Integer spotErrorReportId);

    int insert(SpotErrorReport record);

    int insertSelective(SpotErrorReport record);

    SpotErrorReport selectByPrimaryKey(Integer spotErrorReportId);

    int updateByPrimaryKeySelective(SpotErrorReport record);

    int updateByPrimaryKey(SpotErrorReport record);
}