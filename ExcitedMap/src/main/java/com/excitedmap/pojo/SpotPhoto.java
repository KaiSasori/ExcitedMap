package com.excitedmap.pojo;

public class SpotPhoto {
    private Integer spotPhotoId;

    private Integer spotId;

    private String spotPhotoPath;

    public Integer getSpotPhotoId() {
        return spotPhotoId;
    }

    public void setSpotPhotoId(Integer spotPhotoId) {
        this.spotPhotoId = spotPhotoId;
    }

    public Integer getSpotId() {
        return spotId;
    }

    public void setSpotId(Integer spotId) {
        this.spotId = spotId;
    }

    public String getSpotPhotoPath() {
        return spotPhotoPath;
    }

    public void setSpotPhotoPath(String spotPhotoPath) {
        this.spotPhotoPath = spotPhotoPath == null ? null : spotPhotoPath.trim();
    }
}