package com.excitedmap.pojo;

public class SpotImpl extends Spot {
	int spotFavoriteCount;
	int spotFootprintCount;
	int spotWishCount;
	int spotPopularity;
	double averageReviewRating;

	public double getAverageReviewRating() {
		return averageReviewRating;
	}

	public void setAverageReviewRating(double averageReviewRating) {
		this.averageReviewRating = averageReviewRating;
	}

	public int getSpotFavoriteCount() {
		return spotFavoriteCount;
	}

	public void setSpotFavoriteCount(int spotFavoriteCount) {
		this.spotFavoriteCount = spotFavoriteCount;
	}

	public int getSpotFootprintCount() {
		return spotFootprintCount;
	}

	public void setSpotFootprintCount(int spotFootprintCount) {
		this.spotFootprintCount = spotFootprintCount;
	}

	public int getSpotWishCount() {
		return spotWishCount;
	}

	public void setSpotWishCount(int spotWishCount) {
		this.spotWishCount = spotWishCount;
	}

	public int getSpotPopularity() {
		return spotPopularity;
	}

	public void setSpotPopularity(int spotPopularity) {
		this.spotPopularity = spotPopularity;
	}
}
