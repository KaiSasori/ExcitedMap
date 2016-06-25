package com.excitedmap.pojo;

public class Spot3DModel {
    private Integer spot3dModelId;

    private Integer spotId;

    private String spot3dModelLink;

    public Integer getSpot3dModelId() {
        return spot3dModelId;
    }

    public void setSpot3dModelId(Integer spot3dModelId) {
        this.spot3dModelId = spot3dModelId;
    }

    public Integer getSpotId() {
        return spotId;
    }

    public void setSpotId(Integer spotId) {
        this.spotId = spotId;
    }

    public String getSpot3dModelLink() {
        return spot3dModelLink;
    }

    public void setSpot3dModelLink(String spot3dModelLink) {
        this.spot3dModelLink = spot3dModelLink == null ? null : spot3dModelLink.trim();
    }
}