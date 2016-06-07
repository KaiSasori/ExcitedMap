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


//图层标志显示js
var button1ClickTime = 0;
var button2ClickTime = 0;
var keys1 = [];
var keys2 = [];
function showPrintSpot(index){
	if (index == 1){
		if (button1ClickTime == 0){
			//从数据库中提取categoryId为1的spot
			//categoryId搜索spot
			keys1 = [];
			$.ajax({
				type : "GET",
				url : "/spot/category/1",
				processData : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) {// data is list<spot>
            		for(var i=0; i<data.length; i++){
            			var spotName = data[i].spotName;
                		// TODO
               			keys1.push(spotName);
               		}
					// 百度地图API功能
					var map = new BMap.Map("allmap");            // 创建Map实例
					map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
					var local = new BMap.LocalSearch(map, {
						renderOptions:{map: map},
						pageCapacity:1
					});
					local.searchInBounds(keys1, map.getBounds());
					button1ClickTime = 1;
				},
			});	
		}
		else{
			if (button2ClickTime == 1){
				// 百度地图API功能
				var map = new BMap.Map("allmap");            // 创建Map实例
				map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
				//var myKeys = ["中山公园", "世纪公园", "锦江乐园", "复兴公园"];
				var local = new BMap.LocalSearch(map, {
					renderOptions:{map: map},
					pageCapacity:1
				});
				local.searchInBounds(keys2, map.getBounds());
				button1ClickTime = 0;
			}
			else{
				// 百度地图API功能
				var map = new BMap.Map("allmap");
        		map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        		map.addControl(new BMap.MapTypeControl());
        		map.setCurrentCity("上海");
        		map.enableScrollWheelZoom(true);
				button1ClickTime = 0;
			}
		}
	}else if (index == 2){
		if (button2ClickTime == 0){
			//从数据库中提取categoryId为1的spot
			//categoryId搜索spot
			keys2 = [];
			$.ajax({
				type : "GET",
				url : "/spot/category/2",
				processData : false,
				contentType : "application/json; charset=utf-8",
				success : function(data) {// data is list<spot>
            		for(var i=0; i<data.length; i++){
            			var spotName = data[i].spotName;
                		// TODO
               			keys2.push(spotName);
               		}
					// 百度地图API功能
					var map = new BMap.Map("allmap");            // 创建Map实例
					map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
					var local = new BMap.LocalSearch(map, {
						renderOptions:{map: map},
						pageCapacity:1
					});
					local.searchInBounds(keys2, map.getBounds());
					button2ClickTime = 1;
				},
			});	
		}
		else{
			if (button1ClickTime == 1){
				// 百度地图API功能
				var map = new BMap.Map("allmap");            // 创建Map实例
				map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
				var local = new BMap.LocalSearch(map, {
					renderOptions:{map: map},
					pageCapacity:1
				});
				local.searchInBounds(keys1, map.getBounds());
				button2ClickTime = 0;
			}
			else{
				// 百度地图API功能
				var map = new BMap.Map("allmap");
        		map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        		map.addControl(new BMap.MapTypeControl());
        		map.setCurrentCity("上海");
        		map.enableScrollWheelZoom(true);
				button2ClickTime = 0;
			}
		}
	}
}

