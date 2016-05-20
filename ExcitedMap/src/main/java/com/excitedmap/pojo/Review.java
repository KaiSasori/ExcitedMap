package com.excitedmap.pojo;

public class Review {
    private Integer reviewId;

    private Integer userId;

    private Integer spotId;

    private Integer reviewRating;

    private String reviewPhotoPath;

    private String reviewPhotoDescription;

    private String reviewContent;

    public Integer getReviewId() {
        return reviewId;
    }

    public void setReviewId(Integer reviewId) {
        this.reviewId = reviewId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public Integer getSpotId() {
        return spotId;
    }

    public void setSpotId(Integer spotId) {
        this.spotId = spotId;
    }

    public Integer getReviewRating() {
        return reviewRating;
    }

    public void setReviewRating(Integer reviewRating) {
        this.reviewRating = reviewRating;
    }

    public String getReviewPhotoPath() {
        return reviewPhotoPath;
    }

    public void setReviewPhotoPath(String reviewPhotoPath) {
        this.reviewPhotoPath = reviewPhotoPath == null ? null : reviewPhotoPath.trim();
    }

    public String getReviewPhotoDescription() {
        return reviewPhotoDescription;
    }

    public void setReviewPhotoDescription(String reviewPhotoDescription) {
        this.reviewPhotoDescription = reviewPhotoDescription == null ? null : reviewPhotoDescription.trim();
    }

    public String getReviewContent() {
        return reviewContent;
    }

    public void setReviewContent(String reviewContent) {
        this.reviewContent = reviewContent == null ? null : reviewContent.trim();
    }
}