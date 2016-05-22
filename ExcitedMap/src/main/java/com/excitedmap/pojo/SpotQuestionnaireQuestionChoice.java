package com.excitedmap.pojo;

public class SpotQuestionnaireQuestionChoice {
    private Integer spotQuestionnaireQuestionChoiceId;

    private Integer spotQuestionnaireQuestionId;

    private String spotQuestionnaireQuestionChoiceContent;

    public Integer getSpotQuestionnaireQuestionChoiceId() {
        return spotQuestionnaireQuestionChoiceId;
    }

    public void setSpotQuestionnaireQuestionChoiceId(Integer spotQuestionnaireQuestionChoiceId) {
        this.spotQuestionnaireQuestionChoiceId = spotQuestionnaireQuestionChoiceId;
    }

    public Integer getSpotQuestionnaireQuestionId() {
        return spotQuestionnaireQuestionId;
    }

    public void setSpotQuestionnaireQuestionId(Integer spotQuestionnaireQuestionId) {
        this.spotQuestionnaireQuestionId = spotQuestionnaireQuestionId;
    }

    public String getSpotQuestionnaireQuestionChoiceContent() {
        return spotQuestionnaireQuestionChoiceContent;
    }

    public void setSpotQuestionnaireQuestionChoiceContent(String spotQuestionnaireQuestionChoiceContent) {
        this.spotQuestionnaireQuestionChoiceContent = spotQuestionnaireQuestionChoiceContent == null ? null : spotQuestionnaireQuestionChoiceContent.trim();
    }
}