package com.excitedmap.pojo;

public class SpotLabel {
    private Integer spotLabelId;

    private Integer spotId;

    private Integer userId;

    private Integer spotLabelType;

    private String spotLabelDescription;

    private Double spotLabelCoordinateX;

    private Double spotLabelCoordinateY;

    public Integer getSpotLabelId() {
        return spotLabelId;
    }

    public void setSpotLabelId(Integer spotLabelId) {
        this.spotLabelId = spotLabelId;
    }

    public Integer getSpotId() {
        return spotId;
    }

    public void setSpotId(Integer spotId) {
        this.spotId = spotId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getSpotLabelType() {
        return spotLabelType;
    }

    public void setSpotLabelType(Integer spotLabelType) {
        this.spotLabelType = spotLabelType;
    }

    public String getSpotLabelDescription() {
        return spotLabelDescription;
    }

    public void setSpotLabelDescription(String spotLabelDescription) {
        this.spotLabelDescription = spotLabelDescription == null ? null : spotLabelDescription.trim();
    }

    public Double getSpotLabelCoordinateX() {
        return spotLabelCoordinateX;
    }

    public void setSpotLabelCoordinateX(Double spotLabelCoordinateX) {
        this.spotLabelCoordinateX = spotLabelCoordinateX;
    }

    public Double getSpotLabelCoordinateY() {
        return spotLabelCoordinateY;
    }

    public void setSpotLabelCoordinateY(Double spotLabelCoordinateY) {
        this.spotLabelCoordinateY = spotLabelCoordinateY;
    }
}