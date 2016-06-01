package com.excitedmap.pojo;

public class SpotQuestion {
    private Integer spotQuestionId;

    private Integer spotQuestionnaireId;

    private String spotQuestionContent;

    private String spotQuestionChoiceContent1;

    private String spotQuestionChoiceContent2;

    private String spotQuestionChoiceContent3;

    private String spotQuestionChoiceContent4;

    public Integer getSpotQuestionId() {
        return spotQuestionId;
    }

    public void setSpotQuestionId(Integer spotQuestionId) {
        this.spotQuestionId = spotQuestionId;
    }

    public Integer getSpotQuestionnaireId() {
        return spotQuestionnaireId;
    }

    public void setSpotQuestionnaireId(Integer spotQuestionnaireId) {
        this.spotQuestionnaireId = spotQuestionnaireId;
    }

    public String getSpotQuestionContent() {
        return spotQuestionContent;
    }

    public void setSpotQuestionContent(String spotQuestionContent) {
        this.spotQuestionContent = spotQuestionContent == null ? null : spotQuestionContent.trim();
    }

    public String getSpotQuestionChoiceContent1() {
        return spotQuestionChoiceContent1;
    }

    public void setSpotQuestionChoiceContent1(String spotQuestionChoiceContent1) {
        this.spotQuestionChoiceContent1 = spotQuestionChoiceContent1 == null ? null : spotQuestionChoiceContent1.trim();
    }

    public String getSpotQuestionChoiceContent2() {
        return spotQuestionChoiceContent2;
    }

    public void setSpotQuestionChoiceContent2(String spotQuestionChoiceContent2) {
        this.spotQuestionChoiceContent2 = spotQuestionChoiceContent2 == null ? null : spotQuestionChoiceContent2.trim();
    }

    public String getSpotQuestionChoiceContent3() {
        return spotQuestionChoiceContent3;
    }

    public void setSpotQuestionChoiceContent3(String spotQuestionChoiceContent3) {
        this.spotQuestionChoiceContent3 = spotQuestionChoiceContent3 == null ? null : spotQuestionChoiceContent3.trim();
    }

    public String getSpotQuestionChoiceContent4() {
        return spotQuestionChoiceContent4;
    }

    public void setSpotQuestionChoiceContent4(String spotQuestionChoiceContent4) {
        this.spotQuestionChoiceContent4 = spotQuestionChoiceContent4 == null ? null : spotQuestionChoiceContent4.trim();
    }
}