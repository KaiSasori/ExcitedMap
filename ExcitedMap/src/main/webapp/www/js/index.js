//全局变量
console.log("this:" + spotCategoryId);

function setListMode(index){
	listMode = index;
	console.log("listMode = " + listMode);
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

function clearSearch(){
	for (var num = 1; num <=3; num++){
		var element1Id = "searchSpotName" + num;
		var element2Id = "searchSpotNum" + num;
    	var p1 = document.getElementById(element1Id);
    	p1.innerHTML = '';
    	var p2 = document.getElementById(element2Id);
    	p2.innerHTML = '';
	}
}

//根据关键字进行搜索
function doSearch(){

	clearSearch();

	var keyword = $("#keyword").val();
	console.log(keyword);

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
            	console.log(spotName);
            	if (mode == 1){
            		var Rating = data[i].averageReviewRating;
            		var nameString = "评分：";
                	// TODO
                	addSearchResult(i, spotId, spotName, Rating, nameString);
            	}
            	else if(mode == 2){
            		var Rating = data[i].spotFavoriteCount;
            		var nameString = "收藏：";
                	// TODO
                	addSearchResult(i, spotId, spotName, Rating, nameString);
            	}
            	else if(mode == 3){
            		var Rating = data[i].spotFootprintCount;
            		var nameString = "足迹：";
                	// TODO
                	addSearchResult(i, spotId, spotName, Rating, nameString);
            	}
            	else if(mode == 4){
            		var Rating = data[i].spotWishCount;
            		var nameString = "心愿：";
                	// TODO
                	addSearchResult(i, spotId, spotName, Rating, nameString);
            	}
            }
			//console.log(data);
		},
	});
	
}

function addSearchResult(i, spotId, spotName, Rating, nameString){
	// var content = document.createElement('label');
	// content.setAttribute("class", "item item-input searchResult"); 
 //    var contain = "";
 //    contain='<div id="'+spotId+'">'+ spotName + " " + nameString + Rating +'</div>';
 //    content.innerHTML=contain;
 //    var resultTable = document.getElementById("showSearchTable");
 //    resultTable.appendChild(content);
 	var num = i + 1;
	var element1Id = "searchSpotName" + num;
	var element2Id = "searchSpotNum" + num;
    var p1 = document.getElementById(element1Id);
    console.log(p1 + " " + spotName);
    p1.innerHTML = spotName;
    var p2 = document.getElementById(element2Id);
    p2.innerHTML = nameString + Rating;
}

//搜索历史自动补全测试！！！
//autoCom
function autoCom(){

    var searchKey;
    
    searchKey = $("#keyword").val();

    if(searchKey){   //判定文本框是否为空
        var listLength;     //li长度
        var currentList;    //选中li位置

    $.ajax({
        type : "GET",
        url : "/user/searchHistoryList?keyword=" + searchKey + "&limit=10",
        processData : false,
        contentType : "application/json; charset=utf-8",
        success : function(data) {// data is list<spot>

            var historyResult = "";

            for(var i=0; i<data.length; i++){
                var userId = data[i].userId;
                var searchText = data[i].searchText;
                historyResult += "<li>" + searchText + "</li>";
                console.log(searchText);
            }

            currentList = -1 ;  //初始化为-1
            $("#searchSuggest  ul").html(historyResult); //将异步读取内容显示到提示框中
            listLength = $("#searchSuggest  ul li").length;
            if(listLength > 1){       //判断是否有返回内容
                $("#searchSuggest").show();       //显示提示框
            }
            else{
                $("#searchSuggest").hide();       //隐藏提示框
            }
            $("#searchSuggest  ul li").hover(function(){  //定制提示框内滑动动作
                $("#searchSuggest  ul li").removeClass();//先清除样式 避免跟键盘冲突
                $(this).addClass("lihover");
                currentList = $("#searchSuggest  ul li").index(this)
            }, function(){
                $(this).removeClass("lihover");
            }).click(function(){   //定制提示框内点击动作
                var keywordContent;
                keywordContent=$(this).text();
                $("#keyword").val(keywordContent);
                $("#searchSuggest").hide();
                // $("form#searchBar").submit();     //提交搜索请求
            });
            $(document).keydown(function(event){  //键盘响应函数
                event = event || window.event;  //兼容多浏览器
                if(event.keyCode==38){         //监听上方向键
                //alert("上");
                    if(currentList < 1 ){
                        currentList=listLength - 1;
                        $("#searchSuggest  ul li").removeClass();//先清除样式 避免冲突
                        $("#searchSuggest  ul li").eq(currentList).addClass("lihover");
                    }
                    else{
                        currentList--;
                        $("#searchSuggest  ul li").removeClass();//先清除样式 避免冲突
                        $("#searchSuggest  ul li").eq(currentList).addClass("lihover");
                    }
                };
                if(event.keyCode==40){                    //监听下方向键
                //alert("下");
                    if(currentList <  (listLength - 1) ){
                        currentList++;
                        $("#searchSuggest  ul li").removeClass();//先清除样式 避免冲突
                        $("#searchSuggest  ul li").eq(currentList).addClass("lihover");
                    }
                    else{
                        currentList=0;
                        $("#searchSuggest  ul li").removeClass();//先清除样式 避免冲突
                        $("#searchSuggest  ul li").eq(currentList).addClass("lihover");
                    }
                };
            });      //键盘相应结束
        },
    });
        //end  get  function
        $("body").click(function(){       //点击其他地方隐藏搜索建议提示框
            $("#searchSuggest").hide();
        });
    }//  end if
    else{
        $("#searchSuggest").hide();
    }
}


