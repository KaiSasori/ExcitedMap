package com.excitedmap.pojo;

public class SearchHistory {
    private Integer searchHistoryId;

    private Integer userId;

    private String searchText;

    public Integer getSearchHistoryId() {
        return searchHistoryId;
    }

    public void setSearchHistoryId(Integer searchHistoryId) {
        this.searchHistoryId = searchHistoryId;
    }

    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public String getSearchText() {
        return searchText;
    }

    public void setSearchText(String searchText) {
        this.searchText = searchText == null ? null : searchText.trim();
    }
}