package com.excitedmap.pojo;

public class Spot {
    private Integer spotId;

    private Integer spotCategoryId;

    private String spotName;

    private String spotAddress;

    private String spotDescription;

    public Integer getSpotId() {
        return spotId;
    }

    public void setSpotId(Integer spotId) {
        this.spotId = spotId;
    }

    public Integer getSpotCategoryId() {
        return spotCategoryId;
    }

    public void setSpotCategoryId(Integer spotCategoryId) {
        this.spotCategoryId = spotCategoryId;
    }

    public String getSpotName() {
        return spotName;
    }

    public void setSpotName(String spotName) {
        this.spotName = spotName == null ? null : spotName.trim();
    }

    public String getSpotAddress() {
        return spotAddress;
    }

    public void setSpotAddress(String spotAddress) {
        this.spotAddress = spotAddress == null ? null : spotAddress.trim();
    }

    public String getSpotDescription() {
        return spotDescription;
    }

    public void setSpotDescription(String spotDescription) {
        this.spotDescription = spotDescription == null ? null : spotDescription.trim();
    }
}