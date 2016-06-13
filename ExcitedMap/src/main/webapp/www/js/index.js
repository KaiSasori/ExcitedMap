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
//var searchString = "wishCount";

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
    else if(index == 5)
        searchString = "popularity";
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


