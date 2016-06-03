//所有的js都暂定在此文件中


//usercontroller

//注册函数
function register(username, password, email) {
	$.ajax({
		type : "PUT",
		url : "/user",
		data : JSON.stringify({
			"userName" : username,
			"userPassword" : password,
			"userEmail" : email
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			console.log(data);
		},
	});
}

//登陆函数
function login(email, password) {
	$.ajax({
		type : "POST",
		url : "/user/login",
		data : JSON.stringify({
			"userEmail" : email,
			"userPassword" : password
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			console.log(data);
		},
	});
}

//获取某用户的心愿单
function getUserWishList(userId) {
	$.ajax({
		type : "GET",
		url : "/user/" + userId + "/wishList",
		data : JSON.stringify({
			"userId" : userId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is jsonarray, list<wish>
            for(var i=0; i<data.length; i++){
            	var wishId = data[i].wishId;
            	var spotId = data[i].spotId;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			console.log(data);
		},
	});
}

//获取某用户的收藏favortite
function getUserFavorite(userId) {
	$.ajax({
		type : "GET",
		url : "/user/" + userId + "/favoriteList",
		data : JSON.stringify({
			"userId" : userId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is jsonarray, list<wish>
            for(var i=0; i<data.length; i++){
            	var favoriteId = data[i].favoriteId;
            	var spotId = data[i].spotId;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			console.log(data);
		},
	});
}

//上传用户头像
function setUserAvatar(request, userId, file) {
	$.ajax({
		type : "PUT",
		url : "/user/" + userId + "/avatar",
		data : JSON.stringify({
			"userId" : userId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is String, 
			console.log(data);
		},
	});
}


//wishcontroller

//插入心愿
function addWish(userId, spotId) {
	$.ajax({
		type : "PUT",
		url : "/wish",
		data : JSON.stringify({
			"userId" : userId,
			"spotId" : spotId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			console.log(data);
		},
	});
}

//删除心愿
function deleteWish(userId, spotId) {
	$.ajax({
		type : "DELETE",
		url : "/wish",
		data : JSON.stringify({
			"userId" : userId,
			"spotId" : spotId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			console.log(data);
		},
	});
}


//spotcontroller

//根据spotId获取某spot信息
function getSpotBySpotId(spotId) {
	$.ajax({
		type : "GET",
		url : "/spot/" + spotId,
		data : JSON.stringify({
			"spotId" : spotId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is <spot>
            var spotCategoryId = data.spotCategoryId;
            var spotName = data.spotName;
            var spotAddress = data.spotAddress;
            var spotDescription = data.spotDescription;
			//console.log(data);
		},
	});
}

//根据spotId获取某spot评分信息
function getSpotBySpotId(spotId) {
	$.ajax({
		type : "GET",
		url : "/spot/" + spotId + "/reviewRating",
		data : JSON.stringify({
			"spotId" : spotId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is list
            //返回值是个list，第一个值是一个总评分，第二个值是个list数组，形式如下：
   //          [
  	// 			65,
  	// 			[
   //  				{
   //    					"review_rating": 40,
   //    					"review_rating_count": 1
   //  				},
   //  				{
   //    					"review_rating": 90,
   //    					"review_rating_count": 1
   //  				}
  	// 			]
			// ]
			//console.log(data);
		},
	});
}

//根据spotId获取spotphoto
function getSpotPhotoBySpotId(spotId){
	$.ajax({
		type : "GET",
		url : "/spot/" + spotId + "/photo",
		data : JSON.stringify({
			"spotId" : spotId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is list<photo>
            for(var i=0; i<data.length; i++){
            	var spotPhotoId = data[i].spotPhotoId;
            	var spotPhotoPath = data[i].spotPhotoPath;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			//console.log(data);
		},
	});
}

//关键字搜索spot
function getSpotListBySpotNameKeyword(keyword){
	$.ajax({
		type : "GET",
		url : "/spot",
		data : JSON.stringify({
			"keyword" : keyword
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			//console.log(data);
		},
	});
}

//categoryId搜索spot
function getSpotListBySpotCategoryId(spotCategoryId){
	$.ajax({
		type : "GET",
		url : "/spot/category/"+spotCategoryId,
		data : JSON.stringify({
			"spotCategoryId" : spotCategoryId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			//console.log(data);
		},
	});
}

//根据收藏数获取spotlist，有limit数量限制
function getSpotListOrderByFavoriteCountWithLimit(spotCategoryId, limit){
	$.ajax({
		type : "GET",
		url : "/spot/category/"+spotCategoryId+"/spotListOrderByFavoriteCountWithLimit",
		data : JSON.stringify({
			"spotCategoryId" : spotCategoryId,
			"limit" : limit
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			//console.log(data);
		},
	});
}


//根据心愿单数获取spotlist，有limit数量限制
function getSpotListOrderByWishCountWithLimit(spotCategoryId, limit){
	$.ajax({
		type : "GET",
		url : "/spot/category/"+spotCategoryId+"/spotListOrderByWishCountWithLimit",
		data : JSON.stringify({
			"spotCategoryId" : spotCategoryId,
			"limit" : limit
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			//console.log(data);
		},
	});
}

//根据足迹数获取spotlist，有limit数量限制
function getSpotListOrderByFootprintCountWithLimit(spotCategoryId, limit){
	$.ajax({
		type : "GET",
		url : "/spot/category/"+spotCategoryId+"/spotListOrderByFootprintCountWithLimit",
		data : JSON.stringify({
			"spotCategoryId" : spotCategoryId,
			"limit" : limit
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			//console.log(data);
		},
	});
}

//根据平均评论分数获取spotlist，有limit数量限制
function getSpotListOrderByAverageReviewRatingWithLimit(spotCategoryId, limit){
	$.ajax({
		type : "GET",
		url : "/spot/category/"+spotCategoryId+"/spotListOrderByAverageReviewRatingWithLimit",
		data : JSON.stringify({
			"spotCategoryId" : spotCategoryId,
			"limit" : limit
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {// data is list<spot>
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotCategoryId = data[i].spotCategoryId;
            	var spotName = data[i].spotName;
            	var spotAddress = data[i].spotAddress;
            	var spotDescription = data[i].spotDescription;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			//console.log(data);
		},
	});
}

//searchHistoryController

//插入搜索记录
function addSearchHistory(userId, searchText) {
	$.ajax({
		type : "PUT",
		url : "/searchHistory",
		data : JSON.stringify({
			"userId" : userId,
			"searchText" : searchText
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			console.log(data);
		},
	});
}

//获得某用户的搜索记录，条数限制为limit，string可以为空
function getSearchHistoryByUserId(userId, limit, keyword) {
	$.ajax({
		type : "GET",
		url : "/searchHistory/" + userId,
		data : JSON.stringify({
			"userId" : userId,
			"limit" : limit,
			"keyword" : keyword
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) { // data is list<searchHistory>
			for(var i=0; i<data.length; i++){
            	var searchHistoryId = data[i].searchHistoryId;
            	var userId = data[i].userId;
            	var searchText = data[i].searchText;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			console.log(data);
		},
	});
}

//ReviewController

//插入评论
function addReview(userId, spotId, reviewRating, reviewContent) {
	$.ajax({
		type : "PUT",
		url : "/review",
		data : JSON.stringify({
			"userId" : userId,
			"spotId" : spotId,
			"reviewRating" : reviewRating,
			"reviewContent" : reviewContent
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			console.log(data);
		},
	});
}

//获取某用户的评论
function getReviewByUserId(userId) {
	$.ajax({
		type : "GET",
		url : "/review",
		data : JSON.stringify({
			"userId" : userId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) { // data is list<Review>
			for(var i=0; i<data.length; i++){
            	var reviewId = data[i].reviewId;
            	var userId = data[i].userId;
            	var spotId = data[i].spotId;
            	var reviewRating = data[i].reviewRating;
            	var reviewContent = data[i].reviewContent;
                // TODO
                //addQueryApplicationBySearch(i,projectName,applicationID,predictTime,dayNumber,stuffNumber,applicationState,workDescription,rejectNumber);
            }
			console.log(data);
		},
	});
}

//FavoriteController

//加入收藏
function addFavorite(userId, spotId) {
	$.ajax({
		type : "PUT",
		url : "/favorite",
		data : JSON.stringify({
			"userId" : userId,
			"spotId" : spotId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) {
			console.log(data);
		},
	});
}

//删除收藏
function deleteFavorite(favoriteId, userId, spotId) {
	$.ajax({
		type : "DELETE",
		url : "/favorite",
		data : JSON.stringify({
			"favoriteId" : favoriteId,
			"userId" : userId,
			"spotId" : spotId
		}),
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function(data) { // data is state
			console.log(data);
		},
	});
}


//上传图片文件form和upload()函数
//<script src="./lib/jquery/jquery-2.2.3.min.js" type="text/javascript"></script>
//html form
//<form id="ajaxForm">
//<input type="file" id="file" name="myfile" />
//<input type="button" onclick="UpladFile()" value="上传" />
//</form>

function UpladFile() {
	var file = document.getElementById('file').files[0];
	
	var form = new FormData();
	form.append("file", file);

	var settings = {
	  "async": true,
	  "crossDomain": true,
	  "url": "http://localhost:8080/review/photo",
	  "method": "POST",
	  "processData": false,
	  "contentType": false,
	  "mimeType": "multipart/form-data",
	  "data": form
	}

	$.ajax(settings).done(function (response) {
	  console.log(response);
	});
}





