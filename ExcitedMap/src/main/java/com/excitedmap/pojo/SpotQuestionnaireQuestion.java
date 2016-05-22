package com.excitedmap.pojo;

public class SpotQuestionnaireQuestion {
    private Integer spotQuestionnaireQuestionId;

    private Integer spotQuestionnaireId;

    private String spotQuestionnaireQuestionContent;

    public Integer getSpotQuestionnaireQuestionId() {
        return spotQuestionnaireQuestionId;
    }

    public void setSpotQuestionnaireQuestionId(Integer spotQuestionnaireQuestionId) {
        this.spotQuestionnaireQuestionId = spotQuestionnaireQuestionId;
    }

    public Integer getSpotQuestionnaireId() {
        return spotQuestionnaireId;
    }

    public void setSpotQuestionnaireId(Integer spotQuestionnaireId) {
        this.spotQuestionnaireId = spotQuestionnaireId;
    }

    public String getSpotQuestionnaireQuestionContent() {
        return spotQuestionnaireQuestionContent;
    }

    public void setSpotQuestionnaireQuestionContent(String spotQuestionnaireQuestionContent) {
        this.spotQuestionnaireQuestionContent = spotQuestionnaireQuestionContent == null ? null : spotQuestionnaireQuestionContent.trim();
    }
}