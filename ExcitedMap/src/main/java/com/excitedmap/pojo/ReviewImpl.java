package com.excitedmap.pojo;

import java.util.List;

public class ReviewImpl extends Review {
	List<ReviewPhoto> reviewPhotoList;

	public List<ReviewPhoto> getReviewPhotoList() {
		return reviewPhotoList;
	}

	public void setReviewPhotoList(List<ReviewPhoto> reviewPhotoList) {
		this.reviewPhotoList = reviewPhotoList;
	}
}
