package com.excitedmap.pojo;

public class SpotVideo {
    private Integer spotVideoId;

    private Integer spotId;

    private String spotVideoLink;

    public Integer getSpotVideoId() {
        return spotVideoId;
    }

    public void setSpotVideoId(Integer spotVideoId) {
        this.spotVideoId = spotVideoId;
    }

    public Integer getSpotId() {
        return spotId;
    }

    public void setSpotId(Integer spotId) {
        this.spotId = spotId;
    }

    public String getSpotVideoLink() {
        return spotVideoLink;
    }

    public void setSpotVideoLink(String spotVideoLink) {
        this.spotVideoLink = spotVideoLink == null ? null : spotVideoLink.trim();
    }
}