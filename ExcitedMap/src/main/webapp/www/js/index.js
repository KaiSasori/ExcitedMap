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
                // TODO
                //console.log(spotName + " " + averageReviewRating);
                addSpotListOrderByAverageReviewRating(i, spotName, averageReviewRating);
            }
			//console.log(data);
		},
	});
}

//添加函数，将获取到的结果填入页面list中
function addSpotListOrderByAverageReviewRating(i, spotName, averageReviewRating){
	var num = i + 1;
	var element1Id = "showSpotName" + num;
	var element2Id = "showSpotNum" + num;
    var p1 = document.getElementById(element1Id);
    p1.innerHTML = spotName;
    var p2 = document.getElementById(element2Id);
    p2.innerHTML = "评分：" + averageReviewRating;
    
}
