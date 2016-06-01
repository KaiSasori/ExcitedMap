package com.excitedmap.pojo;

public class SpotQuestionAnswer {
    private Integer spotQuestionAnswerId;

    private Integer spotQuestionId;

    private Integer userId;

    private Integer choice;

    public Integer getSpotQuestionAnswerId() {
        return spotQuestionAnswerId;
    }

    public void setSpotQuestionAnswerId(Integer spotQuestionAnswerId) {
        this.spotQuestionAnswerId = spotQuestionAnswerId;
    }

    public Integer getSpotQuestionId() {
        return spotQuestionId;
    }

    public void setSpotQuestionId(Integer spotQuestionId) {
        this.spotQuestionId = spotQuestionId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getChoice() {
        return choice;
    }

    public void setChoice(Integer choice) {
        this.choice = choice;
    }
}