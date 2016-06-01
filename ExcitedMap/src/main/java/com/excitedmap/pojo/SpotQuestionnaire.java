package com.excitedmap.pojo;

public class SpotQuestionnaire {
    private Integer spotQuestionnaireId;

    private Integer spotId;

    private String spotQuestionnaireTitle;

    private String spotQuestionnaireDescription;

    public Integer getSpotQuestionnaireId() {
        return spotQuestionnaireId;
    }

    public void setSpotQuestionnaireId(Integer spotQuestionnaireId) {
        this.spotQuestionnaireId = spotQuestionnaireId;
    }

    public Integer getSpotId() {
        return spotId;
    }

    public void setSpotId(Integer spotId) {
        this.spotId = spotId;
    }

    public String getSpotQuestionnaireTitle() {
        return spotQuestionnaireTitle;
    }

    public void setSpotQuestionnaireTitle(String spotQuestionnaireTitle) {
        this.spotQuestionnaireTitle = spotQuestionnaireTitle == null ? null : spotQuestionnaireTitle.trim();
    }

    public String getSpotQuestionnaireDescription() {
        return spotQuestionnaireDescription;
    }

    public void setSpotQuestionnaireDescription(String spotQuestionnaireDescription) {
        this.spotQuestionnaireDescription = spotQuestionnaireDescription == null ? null : spotQuestionnaireDescription.trim();
    }
}