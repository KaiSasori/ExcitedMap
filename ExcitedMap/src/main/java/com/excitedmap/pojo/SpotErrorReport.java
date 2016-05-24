package com.excitedmap.pojo;

public class SpotErrorReport {
    private Integer spotErrorReportId;

    private Integer spotId;

    private String spotErrorReportText;

    public Integer getSpotErrorReportId() {
        return spotErrorReportId;
    }

    public void setSpotErrorReportId(Integer spotErrorReportId) {
        this.spotErrorReportId = spotErrorReportId;
    }

    public Integer getSpotId() {
        return spotId;
    }

    public void setSpotId(Integer spotId) {
        this.spotId = spotId;
    }

    public String getSpotErrorReportText() {
        return spotErrorReportText;
    }

    public void setSpotErrorReportText(String spotErrorReportText) {
        this.spotErrorReportText = spotErrorReportText == null ? null : spotErrorReportText.trim();
    }
}