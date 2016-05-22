package com.excitedmap.pojo;

public class SpotCategory {
    private Integer spotCategoryId;

    private String spotCategoryName;

    public Integer getSpotCategoryId() {
        return spotCategoryId;
    }

    public void setSpotCategoryId(Integer spotCategoryId) {
        this.spotCategoryId = spotCategoryId;
    }

    public String getSpotCategoryName() {
        return spotCategoryName;
    }

    public void setSpotCategoryName(String spotCategoryName) {
        this.spotCategoryName = spotCategoryName == null ? null : spotCategoryName.trim();
    }
}