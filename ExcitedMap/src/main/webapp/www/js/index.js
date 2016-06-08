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

//线路规划，目前会有不稳定错误，是百度api问题，不知如何解决
function showManagementBetweenSpots(){
	// 百度地图API功能
	var map = new BMap.Map("manage_map");
	var start = $("#startPlace").val();
	var end = $("#endPlace").val();
	map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
	var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: BMAP_DRIVING_POLICY_LEAST_TIME});
	driving.search(start,end);
}

//search框功能
var searchString = "wishCount";

//判断根据什么条件搜索，默认是根据wish
function searchStringNum(index){
	console.log(index);
	if (index == 1)
		searchString = "averageReviewRating";
	else if(index == 2)
		searchString = "favoriteCount";
	else if(index == 3)
		searchString = "footprintCount";
	else if(index == 4)
		searchString = "wishCount";
}

//是否显示搜索结果
function clearResult(){
	console.log("2222222");
	document.getElementById("keyword").innerHTML='';

	document.getElementById("showSearchTable").innerHTML='';
}

//根据关键字进行搜索
function doSearch(){
	var keyword = $("#keyword").val();
	console.log(keyword);

	//清空div结果
	var currentTable = document.getElementById("showSearchTable");
	currentTable.innerHTML='';

	var mode = 0;
	if (searchString == "averageReviewRating")
		mode = 1;
	else if (searchString == "favoriteCount")
		mode = 2;
	else if (searchString == "footprintCount")
		mode = 3;
	else if (searchString == "wishCount")
		mode = 4;


	$.ajax({
		type : "GET",
		url : "/search/spotList?keyword="+ keyword +"&limit=3&orderby="+ searchString,
		processData : false,
		contentType : "application/json; charset=utf-8",
		success : function(data) {// data is list<spot>
			console.log("00990909090");
            for(var i=0; i<data.length; i++){
            	var spotId = data[i].spotId;
            	var spotName = data[i].spotName;

            	if (mode == 1){
            		var Rating = data[i].averageReviewRating;
            		var nameString = "评分：";
                	// TODO
                	addSearchResult(spotId, spotName, Rating, nameString);
            	}
            	else if(mode == 2){
            		var Rating = data[i].spotFavoriteCount;
            		var nameString = "收藏：";
                	// TODO
                	addSearchResult(spotId, spotName, Rating, nameString);
            	}
            	else if(mode == 3){
            		var Rating = data[i].spotFootprintCount;
            		var nameString = "足迹：";
                	// TODO
                	addSearchResult(spotId, spotName, Rating, nameString);
            	}
            	else if(mode == 4){
            		var Rating = data[i].spotWishCount;
            		var nameString = "心愿：";
                	// TODO
                	addSearchResult(spotId, spotName, Rating, nameString);
            	}
            }
			//console.log(data);
		},
	});
	
}

function addSearchResult(spotId, spotName, Rating, nameString){
	var content = document.createElement('label');
	content.setAttribute("class", "item item-input searchResult"); 
    var contain = "";
    contain='<div id="'+spotId+'">'+ spotName + " " + nameString + Rating +'</div>';
    content.innerHTML=contain;
    var resultTable = document.getElementById("showSearchTable");
    resultTable.appendChild(content);
}
