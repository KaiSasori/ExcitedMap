package com.excitedmap.pojo;

public class ReviewPhoto {
    private Integer reviewPhotoId;

    private Integer reviewId;

    private String reviewPhotoPath;

    private String reviewPhotoDescription;

    public Integer getReviewPhotoId() {
        return reviewPhotoId;
    }

    public void setReviewPhotoId(Integer reviewPhotoId) {
        this.reviewPhotoId = reviewPhotoId;
    }

    public Integer getReviewId() {
        return reviewId;
    }

    public void setReviewId(Integer reviewId) {
        this.reviewId = reviewId;
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
}