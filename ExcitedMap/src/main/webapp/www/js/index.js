//全局变量
console.log("this:" + spotCategoryId);


//spotController
//根据平均评论分数获取spotlist，有limit数量限制
function getSpotListOrderByAverageReviewRating(){
	$.ajax({
		type : "GET",
		url : "/spot/category/"+spotCategoryId+"/spotListOrderByAverageReviewRatingWithLimit?limit=3",
		processData : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
            	var averageReviewRating = data[i].averageReviewRating;
            	var nameString = "评分：";
                // TODO
                addSpotListOrderByNum(i, spotName, averageReviewRating, nameString);
            }
			//console.log(data);
		},
	});
}

//添加函数，将获取到的结果填入页面list中
function addSpotListOrderByNum(i, spotName, totalNum, nameString){
	var num = i + 1;
	var element1Id = "showSpotName" + num;
	var element2Id = "showSpotNum" + num;
    var p1 = document.getElementById(element1Id);
    p1.innerHTML = spotName;
    var p2 = document.getElementById(element2Id);
    p2.innerHTML = nameString + totalNum;
    
}

//根据收藏数获取spotlist，有limit数量限制
function getSpotListOrderByFavoriteCount(){
	$.ajax({
		type : "GET",
		url : "/spot/category/"+spotCategoryId+"/spotListOrderByFavoriteCountWithLimit?limit=3",
		processData : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
            	var spotFavoriteCount = data[i].spotFavoriteCount;
            	var nameString = "收藏：";
                // TODO
                //console.log(spotName + " " + spotFavoriteCount);
                addSpotListOrderByNum(i, spotName, spotFavoriteCount, nameString);
            }
			//console.log(data);
		},
	});
}

//根据足迹数获取spotlist，有limit数量限制
function getSpotListOrderByFootprintCount(){
	$.ajax({
		type : "GET",
		url : "/spot/category/"+spotCategoryId+"/spotListOrderByFootprintCountWithLimit?limit=3",
		processData : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
            	var spotFootprintCount = data[i].spotFootprintCount;
            	var nameString = "足迹：";
                // TODO
                //console.log(spotName + " " + spotFavoriteCount);
                addSpotListOrderByNum(i, spotName, spotFootprintCount, nameString);
            }
			//console.log(data);
		},
	});
}

//根据心愿数获取spotlist，有limit数量限制
function getSpotListOrderByWishCount(){
	$.ajax({
		type : "GET",
		url : "/spot/category/"+spotCategoryId+"/spotListOrderByWishCountWithLimit?limit=3",
		processData : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
            	var spotWishCount = data[i].spotWishCount;
            	var nameString = "心愿：";
                // TODO
                //console.log(spotName + " " + spotFavoriteCount);
                addSpotListOrderByNum(i, spotName, spotWishCount, nameString);
            }
			//console.log(data);
		},
	});
}