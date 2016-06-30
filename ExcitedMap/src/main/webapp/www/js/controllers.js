/**
 * Created by Jinkai on 2016/5/20.
 */
var spotCategoryId = 0;
var listMode = 0;
//history search框功能
var searchString = "wishCount";
var markerClickTime = -1;
var iconMarkerClickTime = 0;
var tabClickTime = 0;
var tab1ClickTime = 0;
var tab2ClickTime = 0;
var userInfoItemChoose = -1;



angular.module('myApp.controllers', [])
.controller('TutorialCtrl', function($scope, $state, $ionicViewService, $rootScope) {
        //首次登陆
        window.localStorage['didTutorial'] = false;

        var startApp = function(){
            $ionicViewService.clearHistory();
            $state.go('tabs.home');
            window.localStorage['didTutorial'] = true;
        }

        $scope.goMain = function() {
            startApp();
        }

        $rootScope.spotCategoryId = 0;
})

.controller('HomeTabCtrl', function($scope) {
    console.log('HomeTabCtrl');
    // 百度地图API功能
    var map = new BMap.Map("allmap");
    map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
    map.addControl(new BMap.MapTypeControl());
    map.setCurrentCity("上海");
    map.enableScrollWheelZoom(true);

    //搜索框功能
    $scope.homeSearch = function(){
        var searchFor = $("#homeSearchKeyword").val();
        // 百度地图API功能
        var map = new BMap.Map("allmap");          
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map}
        });
        local.search(searchFor);
    }









    $scope.button1ClickTime = 0;
    $scope.button2ClickTime = 0;
    $scope.keys1 = [];
    $scope.keys2 = [];

    $scope.showPrintSpot = function(index){
        if (index == 1){
            if ($scope.button1ClickTime == 0){
                //从数据库中提取categoryId为1的spot
                //categoryId搜索spot
                $scope.keys1 = [];
                $.ajax({
                    type : "GET",
                    url : "/spot/category/1",
                    processData : false,
                    contentType : "application/json; charset=utf-8",
                    success : function(data) {// data is list<spot>
                        for(var i=0; i<data.length; i++){
                            var spotName = data[i].spotName;
                            // TODO
                            $scope.keys1.push(spotName);
                        }
                        // 百度地图API功能
                        var map = new BMap.Map("allmap");            // 创建Map实例
                        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
                        var local = new BMap.LocalSearch(map, {
                            renderOptions:{map: map},
                            pageCapacity:1
                        });
                        if ($scope.button2ClickTime == 1){
                            var keys3 = $scope.keys1;
                            for (var m=0; m<$scope.keys2.length; m++){
                                keys3.push($scope.keys2[m]);
                            }
                            local.searchInBounds(keys3, map.getBounds());
                        }else{
                            local.searchInBounds($scope.keys1, map.getBounds());
                        }
                        $scope.button1ClickTime = 1;
                    },
                }); 
            }
            else{
                if ($scope.button2ClickTime == 1){
                    // 百度地图API功能
                    var map = new BMap.Map("allmap");            // 创建Map实例
                    map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
                    //var myKeys = ["中山公园", "世纪公园", "锦江乐园", "复兴公园"];
                    var local = new BMap.LocalSearch(map, {
                        renderOptions:{map: map},
                        pageCapacity:1
                    });
                    local.searchInBounds($scope.keys2, map.getBounds());
                    $scope.button1ClickTime = 0;
                }
                else{
                    // 百度地图API功能
                    var map = new BMap.Map("allmap");
                    map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
                    map.addControl(new BMap.MapTypeControl());
                    map.setCurrentCity("上海");
                    map.enableScrollWheelZoom(true);
                    $scope.button1ClickTime = 0;
                }
            }
        }else if (index == 2){
            if ($scope.button2ClickTime == 0){
                //从数据库中提取categoryId为1的spot
                //categoryId搜索spot
                $scope.keys2 = [];
                $.ajax({
                    type : "GET",
                    url : "/spot/category/2",
                    processData : false,
                    contentType : "application/json; charset=utf-8",
                    success : function(data) {// data is list<spot>
                        for(var i=0; i<data.length; i++){
                            var spotName = data[i].spotName;
                            // TODO
                            $scope.keys2.push(spotName);
                        }
                        // 百度地图API功能
                        var map = new BMap.Map("allmap");            // 创建Map实例
                        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
                        var local = new BMap.LocalSearch(map, {
                            renderOptions:{map: map},
                            pageCapacity:1
                        });
                        if ($scope.button1ClickTime == 1){
                            var keys3 = $scope.keys2;
                            for (var m=0; m<$scope.keys1.length; m++){
                                keys3.push($scope.keys1[m]);
                            }
                            local.searchInBounds(keys3, map.getBounds());
                        }else{
                            local.searchInBounds($scope.keys2, map.getBounds());
                        }
                        $scope.button2ClickTime = 1;
                    },
                }); 
            }
            else{
                if ($scope.button1ClickTime == 1){
                    // 百度地图API功能
                    var map = new BMap.Map("allmap");            // 创建Map实例
                    map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
                    var local = new BMap.LocalSearch(map, {
                        renderOptions:{map: map},
                        pageCapacity:1
                    });
                    local.searchInBounds($scope.keys1, map.getBounds());
                    $scope.button2ClickTime = 0;
                }
                else{
                    // 百度地图API功能
                    var map = new BMap.Map("allmap");
                    map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
                    map.addControl(new BMap.MapTypeControl());
                    map.setCurrentCity("上海");
                    map.enableScrollWheelZoom(true);
                    $scope.button2ClickTime = 0;
                }
            }
        }
    };
})

.controller('NearByTabCtrl', function($scope, $rootScope, $state) {

        // 百度地图API功能
        var map = new BMap.Map("nearmap");
        //var point = new BMap.Point(116.331398,39.897445);
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);

        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition(function(r){
            if(this.getStatus() == BMAP_STATUS_SUCCESS){
                var mk = new BMap.Marker(r.point);
                map.addOverlay(mk);
                map.panTo(r.point);
                //alert('您的位置：'+r.point.lng+','+r.point.lat);
                $rootScope.userCoordinateX = r.point.lng;
                $rootScope.userCoordinateY = r.point.lat;
            }
            else {
                alert('failed'+this.getStatus());
            }        
        },{enableHighAccuracy: true});


        //nearby页面景点列举
        $scope.doNearbySearch = function(index){
            $scope.spotList = [];

            console.log("index = " + index);
            var nearbySearchString = "popularity";
            if (index == 1)
                nearbySearchString = "averageReviewRating";
            else if (index == 2)
                nearbySearchString = "favoriteCount";
            else if (index == 3)
                nearbySearchString = "footprintCount";
            else if (index == 4)
                nearbySearchString = "wishCount";
            else if (index == 5)
                nearbySearchString = "popularity";

            //当前x,y坐标
            console.log($rootScope.userCoordinateX + " " + $rootScope.userCoordinateY);
            console.log("searchString = " + nearbySearchString);


            $.ajax({
                type : "GET",
                url : "/search/adjacentSpot?userCoordinateX="+ $rootScope.userCoordinateX +"&userCoordinateY="+ $rootScope.userCoordinateY +"&limit=6&radius=0.06&orderby="+ nearbySearchString,
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    console.log("nearby页面景点列举");
                    console.log(data);
                    for(var i=0; i<data.length; i++){
                        var spot = {};
                        spot.spotId = data[i].spotId;
                        spot.spotName = data[i].spotName;
                        spot.spotAddress = data[i].spotAddress;
                        spot.spotDescription = data[i].spotDescription;
                        spot.spotCoordinateX = data[i].spotCoordinateX;
                        spot.spotCoordinateY = data[i].spotCoordinateY;
                        //console.log(spotName);
                        if (index == 1){
                            spot.rating = data[i].averageReviewRating;
                            spot.nameString = "评分：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                        else if(index == 2){
                            spot.rating = data[i].spotFavoriteCount;
                            spot.nameString = "收藏：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                        else if(index == 3){
                            spot.rating = data[i].spotFootprintCount;
                            spot.nameString = "足迹：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                        else if(index == 4){
                            spot.rating = data[i].spotWishCount;
                            spot.nameString = "心愿：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                        else if(index == 5){
                            spot.rating = data[i].spotPopularity;
                            spot.nameString = "热门度：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                    }
                    //添加marker
                    for(var i=0; i<$scope.spotList.length;i++){
                        console.log($scope.spotList[i].spotName +" : "+$scope.spotList[i].spotCoordinateX + " , " + $scope.spotList[i].spotCoordinateY);
                        var marker = new BMap.Marker(new BMap.Point($scope.spotList[i].spotCoordinateX, $scope.spotList[i].spotCoordinateY));  // 创建标注，为要查询的地址对应的经纬度
                        var content = $scope.spotList[i].spotName + "<br/>地址："+$scope.spotList[i].spotAddress+"<br/>经度：" + $scope.spotList[i].spotCoordinateX + "<br/>纬度：" + $scope.spotList[i].spotCoordinateY + "<br/>";
                        map.addOverlay(marker);
                        addClickHandler(content,marker,$scope.spotList[i]);
                    }
                    function addClickHandler(content,marker,spot){
                        
                        marker.addEventListener("click",function(e){
                            if (markerClickTime != spot.spotId){
                                openInfo(content,e);
                                markerClickTime = spot.spotId;
                            }
                            else if(markerClickTime == spot.spotId){
                                $scope.goSpot(spot);
                                console.log("进入金冠啦啦啦啦");
                                markerClickTime = -1;
                            }
                            
                        });
                    }
                    function openInfo(content,e){
                        var p = e.target;
                        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                        var opts = {
                            width : 250,     // 信息窗口宽度
                            height: 120,     // 信息窗口高度
                            //title : "基本信息" , // 信息窗口标题
                            enableMessage:true,//设置允许信息窗发送短息
                            enableCloseOnClick:true
                        };
                        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
                        map.openInfoWindow(infoWindow,point); //开启信息窗口
                    }

                    //console.log(data);
                    $state.go('tabs.nearby.detail_list3');
                    console.log("加载完成");
                },
            });
    
        };
})

.controller('AppCtrl', function ($scope, $state, $ionicPopover,$location, $ionicPopup, $rootScope) {

        $scope.login = function(user) {

            if(typeof(user)=='undefined'){
                $scope.showAlert('Please fill username and password to proceed.');
                return false;
            }

            if(user.username=='gjk' && user.password=='gjk'){
                $location.path('/tab/mine');
            }else{
                $scope.showAlert('Invalid username or password.');
            }

        };

        $ionicPopover.fromTemplateUrl('partials/popover.html', function (popover) {
            $scope.popover = popover;

            

        });

        $scope.showAlert = function(msg) {
            var alertPopup = $ionicPopup.alert({
                title: 'Warning Message',
                template: msg
            });
        };



        //mine页面
        $scope.userSpotList = [];
        $rootScope.currentUserId = -1;
        $scope.goMine = function(){
            $rootScope.currentUserId = window.sessionStorage.currentUserId;
            $scope.currentUserName = window.sessionStorage.currentUserName;
            $scope.currentUserEmail = window.sessionStorage.currentUserEmail;
            $scope.currentUserAvatarPath = window.sessionStorage.currentUserAvatarPath;
            $state.go('tabs.mine');
        }

        $scope.mineClick = function(){
            console.log("currentUserId: " + $rootScope.currentUserId);
            if ($rootScope.currentUserId > 0){
                $state.go('tabs.mine');
            }
            else{
                $state.go('tabs.login');
            }
            //$ionicTabsDelegate.select(3);
        }

        //用户界面功能
        $scope.userTest = function(){
            console.log("当前用户id：" + window.sessionStorage.currentUserId);
            console.log("当前用户邮箱：" + window.sessionStorage.currentUserEmail);
            console.log("当前用户名字：" + window.sessionStorage.currentUserName);
            console.log("当前用户头像路径：" + window.sessionStorage.currentUserAvatarPath);
            console.log($scope.userSpotList);
        }
        
        //用户登出
        $scope.userLogOut = function(){
            QC.Login.signOut();
            //alert(QC.Login.check());
            $.ajax({
                type : "GET",
                url : "/user/logout",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data1) {// data is list<spot>
                    alert("登出成功");
                    $rootScope.currentUserId = -1;
                    $state.go('tabs.login');
                },
            });
        }

        //更换头像
        $scope.chooseAvatar = function(){
            document.getElementById("avatar_file").click();
        }

        $scope.changeAvatar = function(){
            var file = document.getElementById('avatar_file').files[0];

            console.log(file);
            if (file != undefined){
                var form = new FormData();
                form.append("file", file);

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "/user/avatar",
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                }

                $.ajax(settings).done(function(response){
                    console.log(response);
                    alert("头像更换成功！");
                    var afterAvatar = response.replace(/\"/g, "");
                    console.log(afterAvatar);
                    $scope.currentUserAvatarPath = afterAvatar;
                    window.sessionStorage.currentUserAvatarPath = afterAvatar;
                    console.log($scope.currentUserAvatarPath);
                    $scope.$apply();
                    window.location.replace("http://localhost:8080/www/index.html#/tab/mine");
                    window.location.reload();
                });
            }else{
                alert("请选择图片！");
                console.log("No file");
            }
        }

        //获取用户个人收藏
        $scope.getUserFavourite = function(){
            $scope.userSpotList = [];
            userInfoItemChoose = 1;
            $.ajax({
                type : "GET",
                url : "/user/"+window.sessionStorage.currentUserId+"/favoriteList",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data1) {// data is list<spot>
                    console.log(data1);
                    for(var i=0; i<data1.length; i++){
                        var thisLength = 0;
                        //根据spotId获取景点信息
                        $.ajax({
                            type : "GET",
                            url : "/spot/"+data1[i].spotId,
                            processData : false,
                            contentType : "application/json; charset=utf-8",
                            success : function(data2) {// data is list<spot>
                                thisLength++;
                                var spot = {};
                                spot.spotId = data2.spotId;
                                spot.spotName = data2.spotName;
                                spot.spotDescription = data2.spotDescription;
                                spot.spotAddress = data2.spotAddress;
                                $scope.userSpotList.push(spot);
                                console.log("thisLength: "  + data1.length + " " + thisLength);
                                if (thisLength == data1.length){
                                    console.log($scope.userSpotList);
                                    $state.go('tabs.mine.detail_list4');
                                }
                            },
                        });
                    }
                },
            });
        }

        //获取用户个人心愿
        $scope.getUserWish = function(){
            $scope.userSpotList = [];
            userInfoItemChoose = 2;
            $.ajax({
                type : "GET",
                url : "/user/"+window.sessionStorage.currentUserId+"/wishList",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data1) {// data is list<spot>
                    console.log(data1);
                    for(var i=0; i<data1.length; i++){
                        var thisLength = 0;
                        //根据spotId获取景点信息
                        $.ajax({
                            type : "GET",
                            url : "/spot/"+data1[i].spotId,
                            processData : false,
                            contentType : "application/json; charset=utf-8",
                            success : function(data2) {// data is list<spot>
                                thisLength++;
                                var spot = {};
                                spot.spotId = data2.spotId;
                                spot.spotName = data2.spotName;
                                spot.spotDescription = data2.spotDescription;
                                spot.spotAddress = data2.spotAddress;
                                $scope.userSpotList.push(spot);
                                console.log("thisLength: "  + data1.length + " " + thisLength);
                                if (thisLength == data1.length){
                                    console.log($scope.userSpotList);
                                    $state.go('tabs.mine.detail_list4');
                                }
                            },
                        });
                    }
                },
            });
        }

        //获取用户个人足迹
        $scope.getUserFootprint = function(){
            $scope.userSpotList = [];
            userInfoItemChoose = 3;
            $.ajax({
                type : "GET",
                url : "/user/"+window.sessionStorage.currentUserId+"/footprintList",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data1) {// data is list<spot>
                    console.log(data1);
                    for(var i=0; i<data1.length; i++){
                        var thisLength = 0;
                        //根据spotId获取景点信息
                        $.ajax({
                            type : "GET",
                            url : "/spot/"+data1[i].spotId,
                            processData : false,
                            contentType : "application/json; charset=utf-8",
                            success : function(data2) {// data is list<spot>
                                thisLength++;
                                var spot = {};
                                spot.spotId = data2.spotId;
                                spot.spotName = data2.spotName;
                                spot.spotDescription = data2.spotDescription;
                                spot.spotAddress = data2.spotAddress;
                                $scope.userSpotList.push(spot);
                                console.log("thisLength: "  + data1.length + " " + thisLength);
                                if (thisLength == data1.length){
                                    console.log($scope.userSpotList);
                                    $state.go('tabs.mine.detail_list4');
                                }
                            },
                        });
                    }
                },
            });
        }

        //获取用户个人评论
        $scope.getUserReviewSpot = function(){
            $scope.userSpotList = [];
            $.ajax({
                type : "GET",
                url : "/user/"+window.sessionStorage.currentUserId+"/reviewList",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data1) {// data is list<spot>
                    console.log(data1);
                    for(var i=0; i<data1.length; i++){
                        var thisLength = 0;
                        //根据spotId获取景点信息
                        $.ajax({
                            type : "GET",
                            url : "/spot/"+data1[i].spotId,
                            processData : false,
                            contentType : "application/json; charset=utf-8",
                            success : function(data2) {// data is list<spot>
                                thisLength++;
                                var spot = {};
                                spot.userReviewRating = data1[thisLength-1].reviewRating;
                                spot.userReviewContent = data1[thisLength-1].reviewContent;
                                spot.spotId = data2.spotId;
                                spot.spotName = data2.spotName;
                                spot.spotDescription = data2.spotDescription;
                                spot.spotAddress = data2.spotAddress;
                                $scope.userSpotList.push(spot);
                                console.log("thisLength: "  + data1.length + " " + thisLength);
                                if (thisLength == data1.length){
                                    console.log($scope.userSpotList);
                                    $state.go('tabs.mine.detail_list5');
                                }
                            },
                        });
                    }
                },
            });
        }


        //个人页面，取消收藏，取消心愿，取消足迹方法
        $scope.deleteMyItem = function(spotId){
            console.log(spotId);
            if (userInfoItemChoose != -1){
                if (userInfoItemChoose == 1){
                    $scope.deleteMyFavorite(spotId);
                    
                }else if(userInfoItemChoose == 2){
                    $scope.deleteMyWish(spotId);
                    
                }else if(userInfoItemChoose == 3){
                    $scope.deleteMyFootprint(spotId);
                    
                }
            }
        }

        //取消收藏
        $scope.deleteMyFavorite = function(spotId){
            $.ajax({
                type : "DELETE",
                url : "/favorite",
                data : JSON.stringify({spotId: spotId}),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                success : function(data) {// data is list<spot>
                },
                statusCode : {
                    200 : function() {
                        console.log("取消收藏成功");
                        $scope.getUserFootprint();
                    },
                    404 : function() {
                        console.log("Not found!");
                    }
                }
            });
        };

        //取消心愿
        $scope.deleteMyWish = function(spotId){
            $.ajax({
                type : "DELETE",
                url : "/wish",
                data : JSON.stringify({spotId: spotId}),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                success : function(data) {// data is list<spot>
                },
                statusCode : {
                    200 : function() {
                        console.log("取消心愿成功");
                        $scope.getUserWish();
                    },
                    404 : function() {
                        console.log("Not found!");
                    }
                }
            });
        };

        //取消足迹
        $scope.deleteMyFootprint = function(spotId){
            $.ajax({
                type : "DELETE",
                url : "/footprint",
                data : JSON.stringify({spotId: spotId}),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                success : function(data) {// data is list<spot>
                },
                statusCode : {
                    200 : function() {
                        console.log("取消足迹成功");
                        $scope.getUserFootprint();
                    },
                    404 : function() {
                        console.log("Not found!");
                    }
                }
            });
        };


        $scope.spotList = [];


        //排序方法
        $scope.listSpots = function(index){
            console.log("listMode = " + listMode);
            console.log("index = " + index);

            if(index == 0){

                if (listMode == 1){
                    $scope.getSpotListOrderByAverageReviewRating();
                }
                else if(listMode == 2){
                    $scope.getSpotListOrderByFavoriteCount();
                }
                else if(listMode == 3){
                    $scope.getSpotListOrderByFootprintCount();
                }
                else if(listMode == 4){
                    $scope.getSpotListOrderByWishCount();
                }
                else if(listMode == 5){
                    $scope.getSpotListOrderByPopularity(0);
                }
            }else if (index == 1){
                $scope.getSpotListOrderByPopularity(1);
            }


        };

        //5种排序方法
        //根据平均评论分数获取spotlist，有limit数量限制
        $scope.getSpotListOrderByAverageReviewRating = function(){
            $scope.spotList = [];
            $.ajax({
                type : "GET",
                url : "/spot/category/"+$rootScope.spotCategoryId+"/spotListOrderByAverageReviewRatingWithLimit?limit=3",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    for(var i=0; i<data.length; i++){
                        var spot = {};
                        spot.spotId = data[i].spotId;
                        spot.spotCategoryId = data[i].spotCategoryId;
                        spot.spotName = data[i].spotName;
                        spot.spotAddress = data[i].spotAddress;
                        spot.spotDescription = data[i].spotDescription;
                        spot.rating = data[i].averageReviewRating;
                        spot.nameString = "评分：";
                        // TODO
                        $scope.spotList.push(spot);
                        //console.log(spotName);
                    }
                    console.log($scope.spotList);
                    $state.go('tabs.list.detail_list' + $rootScope.spotCategoryId);
                },
            });
        };

        //根据收藏数获取spotlist，有limit数量限制
        $scope.getSpotListOrderByFavoriteCount = function(){
            $scope.spotList = [];
            $.ajax({
                type : "GET",
                url : "/spot/category/"+$rootScope.spotCategoryId+"/spotListOrderByFavoriteCountWithLimit?limit=3",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    for(var i=0; i<data.length; i++){
                        var spot = {};
                        spot.spotId = data[i].spotId;
                        spot.spotCategoryId = data[i].spotCategoryId;
                        spot.spotName = data[i].spotName;
                        spot.spotAddress = data[i].spotAddress;
                        spot.spotDescription = data[i].spotDescription;
                        spot.rating = data[i].spotFavoriteCount;
                        spot.nameString = "收藏：";
                        // TODO
                        $scope.spotList.push(spot);
                    }
                    console.log($scope.spotList);
                    $state.go('tabs.list.detail_list' + $rootScope.spotCategoryId);
                },
            });
        };


        //根据足迹数获取spotlist，有limit数量限制
        $scope.getSpotListOrderByFootprintCount = function(){
            $scope.spotList = [];
            $.ajax({
                type : "GET",
                url : "/spot/category/"+$rootScope.spotCategoryId+"/spotListOrderByFootprintCountWithLimit?limit=3",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    for(var i=0; i<data.length; i++){
                        var spot = {};
                        spot.spotId = data[i].spotId;
                        spot.spotCategoryId = data[i].spotCategoryId;
                        spot.spotName = data[i].spotName;
                        spot.spotAddress = data[i].spotAddress;
                        spot.spotDescription = data[i].spotDescription;
                        spot.rating = data[i].spotFootprintCount;
                        spot.nameString = "足迹：";
                        // TODO
                        $scope.spotList.push(spot);
                    }
                    console.log($scope.spotList);
                    $state.go('tabs.list.detail_list' + $rootScope.spotCategoryId);
                },
            });
        };

        //根据心愿数获取spotlist，有limit数量限制
        $scope.getSpotListOrderByWishCount = function(){
            $scope.spotList = [];
            $.ajax({
                type : "GET",
                url : "/spot/category/"+$rootScope.spotCategoryId+"/spotListOrderByWishCountWithLimit?limit=3",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    for(var i=0; i<data.length; i++){
                        var spot = {};
                        spot.spotId = data[i].spotId;
                        spot.spotCategoryId = data[i].spotCategoryId;
                        spot.spotName = data[i].spotName;
                        spot.spotAddress = data[i].spotAddress;
                        spot.spotDescription = data[i].spotDescription;
                        spot.rating = data[i].spotWishCount;
                        spot.nameString = "心愿：";
                        // TODO
                        $scope.spotList.push(spot);
                    }
                    console.log($scope.spotList);
                    $state.go('tabs.list.detail_list' + $rootScope.spotCategoryId);
                },
            });
        };

        //根据popularity获取spotlist，有limit数量限制
        $scope.getSpotListOrderByPopularity = function(index){
            $scope.spotList = [];
            if (index == 0){
                $.ajax({
                type : "GET",
                url : "/spot/category/"+$rootScope.spotCategoryId+"/spotListOrderByPopularityWithLimit?limit=3",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    for(var i=0; i<data.length; i++){
                        var spot = {};
                        spot.spotId = data[i].spotId;
                        spot.spotCategoryId = data[i].spotCategoryId;
                        spot.spotName = data[i].spotName;
                        spot.spotAddress = data[i].spotAddress;
                        spot.spotDescription = data[i].spotDescription;
                        spot.rating = data[i].spotPopularity;
                        spot.nameString = "热门度：";
                        // TODO
                        $scope.spotList.push(spot);
                    }
                    console.log($scope.spotList);
                    $state.go('tabs.list.detail_list' + $rootScope.spotCategoryId);
                },
            });
            }else if(index == 1){
                $.ajax({
                type : "GET",
                url : "/spot/category/"+$rootScope.spotCategoryId+"/spotListOrderByPopularityWithLimit?limit=10",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    for(var i=0; i<data.length; i++){
                        var spot = {};
                        spot.spotId = data[i].spotId;
                        spot.spotCategoryId = data[i].spotCategoryId;
                        spot.spotName = data[i].spotName;
                        spot.spotAddress = data[i].spotAddress;
                        spot.spotDescription = data[i].spotDescription;
                        spot.rating = data[i].spotPopularity;
                        spot.nameString = "热门度：";
                        // TODO
                        $scope.spotList.push(spot);
                    }
                    console.log($scope.spotList);
                    $state.go('tabs.list.detail_list' + $rootScope.spotCategoryId);
                },
            });
            }
        };

        //历史搜索页面的显示
        //根据关键字进行搜索
        $scope.doSearch = function(){
            $scope.spotList = [];

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
            else if (searchString == "popularity")
                mode = 5;


            $.ajax({
                type : "GET",
                url : "/search/spotList?keyword="+ keyword +"&limit=3&orderby="+ searchString,
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    console.log("00990909090");
                    console.log(keyword + " " + searchString);
                    console.log(data);
                    for(var i=0; i<data.length; i++){
                        var spot = {};
                        spot.spotId = data[i].spotId;
                        spot.spotName = data[i].spotName;
                        //console.log(spotName);
                        if (mode == 1){
                            spot.rating = data[i].averageReviewRating;
                            spot.nameString = "评分：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                        else if(mode == 2){
                            spot.rating = data[i].spotFavoriteCount;
                            spot.nameString = "收藏：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                        else if(mode == 3){
                            spot.rating = data[i].spotFootprintCount;
                            spot.nameString = "足迹：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                        else if(mode == 4){
                            spot.rating = data[i].spotWishCount;
                            spot.nameString = "心愿：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                        else if(mode == 5){
                            spot.rating = data[i].spotPopularity;
                            spot.nameString = "热门度：";
                            // TODO
                            $scope.spotList.push(spot);
                        }
                    }
                    //console.log(data);
                    $state.go('tabs.history.detail_list2');
                },
            });
    
        };






        $scope.goSpot = function(spot){
            tab1ClickTime = 1;
            tab2ClickTime = 1;
            console.log("yyyyyy");
            console.log(spot.spotId);
            console.log(spot.spotName);
            console.log(spot.spotDescription);
            
            //获取景点图片
            $scope.spotPictureList = [];
            $scope.getSpotPicture(spot.spotId);


            //获取景点问卷
            $scope.questionnaireList = {};
            $scope.questionnaireList.spotQuestionList = [];
            $scope.getSpotQuestionnaireList(spot.spotId);


            $scope.spotId = spot.spotId;
            $scope.spotName = spot.spotName;
            $scope.spotDescription = spot.spotDescription;
            //跳转到具体景观页面
            $state.go('tabs.detail');

            

            $scope.addFavoriteButton = "+ 收藏";
            $scope.addFootprintButton = "+ 足迹";
            $scope.addWishButton = "+ 心愿单";


            //获取该地点评分列表
            $scope.getReviewRating(spot.spotId);
            //获取该地点的详细信息
            $scope.spotDetailList = {};
            $scope.getSpotDetail(spot.spotId);
            //获取其他用户评价
            $scope.getSpotReviewList(spot.spotId);
            //用户评论照片list
            $scope.reviewPhotoList = [];
            
        };

        $scope.getReviewRating = function(thisspotId){
            $.ajax({
                type : "GET",
                url : "/spot/"+thisspotId+"/reviewRating",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    console.log(data);
                    console.log(data[1]);
                    console.log(data[1][0].review_rating);


                    $scope.averageRating = data[0];
                    $scope.oneNum = 0;
                    $scope.twoNum = 0;
                    $scope.threeNum = 0;
                    $scope.fourNum = 0;
                    $scope.fiveNum = 0;

                    
                    for(var i=0; i<data[1].length; i++){
                        if (data[1][i].review_rating == 1){
                            $scope.oneNum = data[1][i].review_rating_count;
                        }
                        else if (data[1][i].review_rating == 2){
                            $scope.twoNum = data[1][i].review_rating_count;
                        }
                        else if (data[1][i].review_rating == 3){
                            $scope.threeNum = data[1][i].review_rating_count;
                        }
                        else if (data[1][i].review_rating == 4){
                            $scope.fourNum = data[1][i].review_rating_count;
                        }
                        else if (data[1][i].review_rating == 5){
                            $scope.fiveNum = data[1][i].review_rating_count;
                        }
                    }
                },
            });
        };

        $scope.getSpotDetail = function(thisspotId){
            $.ajax({
                type : "GET",
                url : "/spot/"+thisspotId,
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    
                    $scope.spotAddress = data.spotAddress;
                    $scope.spotDescription = data.spotDescription;

                    $scope.spotDetailList.spotAddress = data.spotAddress;
                    $scope.spotDetailList.spotDescription = data.spotDescription;
                    $scope.spotDetailList.spotCoordinateX = data.spotCoordinateX;
                    $scope.spotDetailList.spotCoordinateY = data.spotCoordinateY;
                },
            });
        };

        //获取其他用户评论
        $scope.getSpotReviewList = function(thisspotId){
            $.ajax({
                type : "GET",
                url : "/spot/"+thisspotId+"/reviewList",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    var review = "";
                    for(var i=0;i<data.length;i++){
                        var userId = data[i].userId;
                        var reviewRating = data[i].reviewRating;
                        var reviewContent = data[i].reviewContent;
                        review += "用户ID："+ userId + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp景观评分："+ reviewRating +"<br>用户评价：" + reviewContent + "<br>";
                    }
                    //$scope.spotReview = review;
                    $("#spotReviewList").html(review);
                },
            });
        };

        //获取本景点图片
        $scope.getSpotPicture = function(thisspotId){
            $.ajax({
                type : "GET",
                url : "/spot/"+thisspotId+"/photo",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    console.log(data);
                    console.log($.isEmptyObject(data));
                    $scope.spotPictureList = [];
                    if (!$.isEmptyObject(data)){
                        for (var i = 0; i < data.length; i++){
                            var spotPicture = [];
                            spotPicture.spotPhotoPath = data[i].spotPhotoPath;
                            $scope.spotPictureList.push(spotPicture);
                        }
                    }
                },
            });
        };


        //获取本景点问卷id
        $scope.getSpotQuestionnaireList = function(thisspotId){
            $.ajax({
                type : "GET",
                url : "/spot/"+thisspotId+"/questionnaireList",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    console.log(data);
                    console.log($.isEmptyObject(data));
                    $scope.questionnaireList = {};
                    if (!$.isEmptyObject(data)){
                        $scope.questionnaireList.spotQuestionnaireId = data[0].spotQuestionnaireId;
                        console.log("id : "+ data[0].spotQuestionnaireId);
                        $scope.questionnaireList.spotQuestionnaireTitle = data[0].spotQuestionnaireTitle;
                        $scope.questionnaireList.spotQuestionnaireDescription = data[0].spotQuestionnaireDescription;

                        $scope.getSpotQuestionnaireQuestionList($scope.questionnaireList.spotQuestionnaireId);
                        console.log("问卷id："+$scope.questionnaireList.spotQuestionnaireId);
                    }
                },
            });
        };
        
        //获取景点问卷题目
        $scope.getSpotQuestionnaireQuestionList = function(thisquestionnaireId){
            $.ajax({
                type : "GET",
                url : "/spotQuestionnaire/"+thisquestionnaireId+"/questionList",
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    console.log(data);
                    $scope.questionnaireList.spotQuestionList = [];
                    $scope.questionnaireList.spotQuestionnaireLength = data.length;
                    for(var i=0; i<data.length; i++){
                        var questionList = {};
                        questionList.spotQuestionId = data[i].spotQuestionId;
                        questionList.spotQuestionContent = data[i].spotQuestionContent;
                        questionList.spotQuestionChoiceContent1 = data[i].spotQuestionChoiceContent1;
                        questionList.spotQuestionChoiceContent2 = data[i].spotQuestionChoiceContent2;
                        questionList.spotQuestionChoiceContent3 = data[i].spotQuestionChoiceContent3;
                        questionList.spotQuestionChoiceContent4 = data[i].spotQuestionChoiceContent4;
                        $scope.questionnaireList.spotQuestionList.push(questionList);
                    }
                    console.log("12121212");
                    console.log($scope.questionnaireList.spotQuestionList);
                },
            });
        };


        //提交问题答案
        $scope.submitQuestionAnswer = function(){
            var answer1 =$('input:radio[name="group1"]:checked').val();
            var answer2 =$('input:radio[name="group2"]:checked').val();
            if (answer1 != undefined && answer2 != undefined){
                var answerListLength = $scope.questionnaireList.spotQuestionnaireLength;
                console.log("no choice " + $scope.questionnaireList.spotQuestionList[0].spotQuestionId);
                var answerList = [];
                for (var i=0; i<answerListLength;i++){
                    var answer = {};
                    answer.spotQuestionId = $scope.questionnaireList.spotQuestionList[i].spotQuestionId;
                    answer.choice = $('input:radio[name="group'+$scope.questionnaireList.spotQuestionList[i].spotQuestionId+'"]:checked').val();;
                    answerList.push(answer);
                }
                $.ajax({
                    type : "PUT",
                    url : "/spotQuestionAnswer",
                    data : JSON.stringify(answerList),
                    contentType : "application/json; charset=utf-8",
                    dataType : "json",
                    success : function(data) {
                        console.log("answer submit!");
                    },
                });
            }
            else{
                alert("请填写完问卷再提交！");
            }
        }

        $scope.changeButton = function(){
            $scope.addFavoriteButton = "取消收藏";
        }
        //按钮功能

        //＋收藏
        $scope.addFavorite = function(){
            //$scope.addFavoriteButton = "取消收藏";
            $.ajax({
                type : "PUT",
                url : "/favorite",
                data : JSON.stringify({spotId: $scope.spotId}),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                statusCode : {
                    201 : function() {
                        console.log("收藏成功");
                        $scope.addFavoriteButton = "取消收藏";
                        $scope.$apply();
                        //console.log($scope.addFavoriteButton);
                    },
                    409 : function() {
                        console.log("conflit!");
                        //$scope.addFavoriteButton = "+ 收藏";
                        $scope.deleteFavorite();
                    }
                }
            });
        };

        //取消收藏
        $scope.deleteFavorite = function(){
            $scope.addFavoriteButton = "+ 收藏";
            $scope.$apply();
            $.ajax({
                type : "DELETE",
                url : "/favorite",
                data : JSON.stringify({spotId: $scope.spotId}),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                success : function(data) {// data is list<spot>
                },
                statusCode : {
                    200 : function() {
                        console.log("取消收藏成功");
                    },
                    404 : function() {
                        console.log("Not found!");
                    }
                }
            });
        };


        //＋足迹
        $scope.addFootprint = function(){
            $.ajax({
                type : "PUT",
                url : "/footprint",
                data : JSON.stringify({spotId: $scope.spotId}),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                statusCode : {
                    201 : function() {
                        console.log("添加足迹成功");
                        $scope.addFootprintButton = "取消足迹";
                        $scope.$apply();
                        //console.log($scope.addFavoriteButton);
                    },
                    409 : function() {
                        console.log("conflit!");
                        $scope.deleteFootprint();
                    }
                }
            });
        };

        //取消足迹
        $scope.deleteFootprint = function(){
            $scope.addFootprintButton = "+ 足迹";
            $scope.$apply();
            $.ajax({
                type : "DELETE",
                url : "/footprint",
                data : JSON.stringify({spotId: $scope.spotId}),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                success : function(data) {// data is list<spot>
                },
                statusCode : {
                    200 : function() {
                        console.log("取消足迹成功");
                    },
                    404 : function() {
                        console.log("Not found!");
                    }
                }
            });
        };


        //＋心愿
        $scope.addWish = function(){
            //$scope.addFavoriteButton = "取消收藏";
            $.ajax({
                type : "PUT",
                url : "/wish",
                data : JSON.stringify({spotId: $scope.spotId}),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                statusCode : {
                    201 : function() {
                        console.log("心愿成功");
                        $scope.addWishButton = "取消心愿";
                        $scope.$apply();
                        //console.log($scope.addFavoriteButton);
                    },
                    409 : function() {
                        console.log("conflit!");
                        //$scope.addFavoriteButton = "+ 收藏";
                        $scope.deleteWish();
                    }
                }
            });
        };

        //取消心愿
        $scope.deleteWish = function(){
            $scope.addWishButton = "+ 心愿单";
            $scope.$apply();
            $.ajax({
                type : "DELETE",
                url : "/wish",
                data : JSON.stringify({spotId: $scope.spotId}),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                success : function(data) {// data is list<spot>
                },
                statusCode : {
                    200 : function() {
                        console.log("取消心愿成功");
                    },
                    404 : function() {
                        console.log("Not found!");
                    }
                }
            });
        };

        //报错
        $scope.doErrorReport = function(){
            var errorReason = $("#errorReason").val();
            $.ajax({
                type : "PUT",
                url : "/spot/reportError",
                data : JSON.stringify({
                    spotId: $scope.spotId,
                    spotErrorReportText: errorReason
                }),
                contentType : "application/json; charset=utf-8",
                dataType : "json",
                success : function(data){
                },
                statusCode : {
                    200 : function() {
                        console.log("报错成功，感谢您的支持");
                        $("#detail_pane").show();
                        $("#error_pane").hide();
                        $("#errorReason").val("");
                    }
                }
            });
        }

        //到这去
        $scope.goThere = function(){
            var goalName = $scope.spotName;
            console.log("go " + goalName);
            $state.go('tabs.management');
            $scope.endPlace = goalName;
        };

        //用户发表评论
        $scope.submitReview = function(){
            //获取评价星数
            var starClassName = $("ul#zero_star").attr("class");
            var starNum = 0;
            if (starClassName == "rating zerostar"){
                starNum = 0;
            }
            else if (starClassName == "rating onestar"){
                starNum = 1;
            }
            else if (starClassName == "rating twostar"){
                starNum = 2;
            }
            else if (starClassName == "rating threestar"){
                starNum = 3;
            }
            else if (starClassName == "rating fourstar"){
                starNum = 4;
            }
            else if (starClassName == "rating fivestar"){
                starNum = 5;
            }
            console.log(starNum);

            
            //获取评论内容
            var thisReviewContent = $("#spotReviewFromUser").val();
            console.log(thisReviewContent);
            //判断用户评价是否合理！
            if(starNum == 0){
                alert("请选择星数来评价！")
            }
            else if(thisReviewContent == ""){
                alert("请输入评论！");
            }
            else{
                $.ajax({
                    type : "PUT",
                    url : "/review",
                    data : JSON.stringify({
                        "spotId" : $scope.spotId,
                        "reviewRating" : starNum,
                        "reviewContent" : thisReviewContent,
                        "reviewPhotoList" : $scope.reviewPhotoList
                    }),
                    contentType : "application/json; charset=utf-8",
                    dataType : "json",
                    success : function(data) {
                        console.log(data);
                    },
                    statusCode : {
                        201 : function() {
                            console.log("评论成功");
                            $scope.reviewPhotoList = [];
                            $("#plus_pane").show();
                            $("#detail_pane").hide();
                            $("#question_pane").hide();
                            $("#add_pane").hide();
                        }
                    }
                });
            }
            
        }

        //上传照片
        $scope.uploadFile = function() {
            //照片描述
            var photeDescription = $("#photoDescriptionText").val();

            var file = document.getElementById('file').files[0];
            console.log(file);
            if (file != undefined){
                var form = new FormData();
                form.append("file", file);

                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "/review/photo",
                    "method": "POST",
                    "processData": false,
                    "contentType": false,
                    "mimeType": "multipart/form-data",
                    "data": form
                }

                $.ajax(settings).done(function(response){
                    console.log(response);
                    console.log(JSON.parse(response).reviewPhotoPath);
                    console.log("09876");
                    var photoInfo = {};
                    photoInfo.reviewPhotoId = JSON.parse(response).reviewPhotoId;
                    photoInfo.reviewId = JSON.parse(response).reviewId;
                    photoInfo.reviewPhotoPath = JSON.parse(response).reviewPhotoPath;
                    photoInfo.reviewPhotoDescription = photeDescription;



                    //JSON.parse(response).reviewPhotoDescription = photeDescription;
                    console.log(photoInfo);
                    $scope.reviewPhotoList.push(photoInfo);
                    console.log($scope.reviewPhotoList);
                    $("#photoDescriptionText").val("");
                });
                $("#add_pane").show();
                $("#add_pane_plus").hide();
            }else{
                alert("请选择图片！");
                console.log("No file");
            }
        };



        

        //交换起点终点功能
        $scope.changeStartAndEnd = function(){
            var start = $("#startPlace").val();
            var end = $("#endPlace").val();
            console.log("change:" + start + "with" + end);
            $("#startPlace").val(end);
            $("#endPlace").val(start);
        }


        //线路规划
        //记录起点和终点目标的X和Y坐标
            $rootScope.startX = "";
            $rootScope.startY = "";
            $rootScope.endX = "";
            $rootScope.endY = "";
        $scope.setStartEndCoordinate = function(){
            // 百度地图API功能
            var start = $("#startPlace").val();
            var end = $("#endPlace").val();
            var map = new BMap.Map("manage_map");
            $scope.searchBySpotName(map, start,1);
            $scope.searchBySpotName(map, end,2);
        };

        $scope.searchBySpotName = function(map, keyword, index){
            
            
            // map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
            // var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: BMAP_DRIVING_POLICY_LEAST_TIME});
            // driving.search(start,end);
            var localSearch = new BMap.LocalSearch(map);
            localSearch.enableAutoViewport(); //允许自动调节窗体大小
            localSearch.setSearchCompleteCallback(function (searchResult) {
                var poi = searchResult.getPoi(0);
                if (index == 1){
                    $rootScope.startX = poi.point.lng;
                    $rootScope.startY = poi.point.lat;
                }
                else if (index == 2){
                    $rootScope.endX = poi.point.lng;
                    $rootScope.endY = poi.point.lat;
                }
                console.log(keyword + " : " + poi.point.lng + "," + poi.point.lat);
                map.centerAndZoom(poi.point, 13);
                var marker = new BMap.Marker(new BMap.Point(poi.point.lng, poi.point.lat));  // 创建标注，为要查询的地址对应的经纬度
                map.addOverlay(marker);
            });
            localSearch.search(keyword);
        };

        $scope.doManagement = function(){
            var start = $("#startPlace").val();
            var end = $("#endPlace").val();
            var map = new BMap.Map("manage_map");
            map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
            map.clearOverlays();//清空原来的标注
            var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true},policy: BMAP_DRIVING_POLICY_LEAST_TIME});
            driving.search(start,end);
            console.log($rootScope.startX + " , " + $rootScope.startY + " , " + $rootScope.endX + " , " + $rootScope.endY);
            $scope.spotList = [];
            $.ajax({
                type : "GET",
                url : "/search/routePlan?startCoordinateX="+ $rootScope.startX +"&startCoordinateY="+ $rootScope.startY + "&endCoordinateX="+ $rootScope.endX +"&endCoordinateY="+ $rootScope.endY,
                processData : false,
                contentType : "application/json; charset=utf-8",
                success : function(data) {// data is list<spot>
                    console.log("nearby页面景点列举");
                    console.log(data);
                    for(var i=0; i<data.length; i++){
                        var spot = {};
                        spot.spotId = data[i].spotId;
                        spot.spotName = data[i].spotName;
                        spot.spotAddress = data[i].spotAddress;
                        spot.spotDescription = data[i].spotDescription;
                        spot.spotCoordinateX = data[i].spotCoordinateX;
                        spot.spotCoordinateY = data[i].spotCoordinateY;
                        $scope.spotList.push(spot);

                        
                    }
                    for(var i=0; i<$scope.spotList.length;i++){
                        console.log($scope.spotList[i].spotName +" : "+$scope.spotList[i].spotCoordinateX + " , " + $scope.spotList[i].spotCoordinateY);
                        var marker = new BMap.Marker(new BMap.Point($scope.spotList[i].spotCoordinateX, $scope.spotList[i].spotCoordinateY));  // 创建标注，为要查询的地址对应的经纬度
                        var content = $scope.spotList[i].spotName + "<br/>地址："+$scope.spotList[i].spotAddress+"<br/>经度：" + $scope.spotList[i].spotCoordinateX + "<br/>纬度：" + $scope.spotList[i].spotCoordinateY + "<br/>";
                        //content += "<button id='printIndex'>进入景观</button>";
                        map.addOverlay(marker);
                        addClickHandler(content,marker,$scope.spotList[i]);
                        // var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
                        // marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
                    }
                    // var spot = {};
                    // for(spot in $scope.spotList){
                    //     console.log(spot.spotName +" : "+spot.spotCoordinateX + " , " + spot.spotCoordinateY);
                    //     var marker = new BMap.Marker(new BMap.Point(spot.spotCoordinateX, spot.spotCoordinateY));  // 创建标注，为要查询的地址对应的经纬度
                    //     var content = spot.spotName + "<br/>地址："+spot.spotAddress+"<br/>经度：" + spot.spotCoordinateX + "<br/>纬度：" + spot.spotCoordinateY + "<br/>";
                    //     content += "<button ng-click='goSpot("+spot+")'>进入景观</button>"
                    //     map.addOverlay(marker);
                    //     addClickHandler(content,marker);
                    //     // var infoWindow = new BMap.InfoWindow("<p style='font-size:14px;'>" + content + "</p>");
                    //     // marker.addEventListener("click", function () { this.openInfoWindow(infoWindow); });
                        
                    // }
                    function addClickHandler(content,marker,spot){
                        
                        marker.addEventListener("click",function(e){
                            if (markerClickTime != spot.spotId){
                                openInfo(content,e);
                                markerClickTime = spot.spotId;
                            }
                            else if(markerClickTime == spot.spotId){
                                $scope.goSpot(spot);
                                console.log("进入金冠啦啦啦啦");
                                markerClickTime = -1;
                            }
                            
                        });
                    }
                    function openInfo(content,e){
                        var p = e.target;
                        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                        var opts = {
                            width : 250,     // 信息窗口宽度
                            height: 120,     // 信息窗口高度
                            //title : "基本信息" , // 信息窗口标题
                            enableMessage:true,//设置允许信息窗发送短息
                            enableCloseOnClick:true
                        };
                        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
                        map.openInfoWindow(infoWindow,point); //开启信息窗口
                    }

                    //console.log(data);
                    //$state.go('tabs.nearby.detail_list3');
                    console.log("规划完成");
                },
            });
        }


        //评价页面
        $scope.goCommand = function(){
            $state.go('tabs.command');
        }

        function printIndex(index){
            console.log(index);
        }
    

})

.controller('DetailCtrl', function($scope) {

        // 百度地图API功能
        var map = new BMap.Map("detailmap");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        //map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);

        var myKeys = [$scope.spotName];
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map, panel:"r-result"},
            pageCapacity:1
        });
        local.searchInBounds(myKeys, map.getBounds());

})

.controller('ListCtrl', function($scope, $rootScope, $state){
        tabClickTime = 0;
        tab1ClickTime = 0;
        tab2ClickTime = 0;
        
        $scope.onTabSelected = function(index){
            $rootScope.spotCategoryId = index;
            //spotCategoryId = index;
            console.log("success! : " + $rootScope.spotCategoryId);

            //加载当前目录所有景点
            if (tabClickTime != index){
                if (tab1ClickTime == 0 && index == 1){
                    tab1ClickTime = 1;
                    tab2ClickTime = 0;
                    tabClickTime = index;
                    $scope.listSpots(1);
                    console.log("tabClickTime : " + tabClickTime);
                }else if(tab2ClickTime == 0 && index == 2){
                    tab1ClickTime = 0;
                    tab2ClickTime = 2;
                    tabClickTime = index;
                    $scope.listSpots(1);
                    console.log("tabClickTime : " + tabClickTime);
                }
                //$state.go('tabs.list.detail_list' + $rootScope.spotCategoryId);
                console.log("tabClickTime : " + tabClickTime);
            }
        };

})

.controller('ManagementCtrl', function($scope) {

        // 百度地图API功能
        var map = new BMap.Map("manage_map");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);


})

.controller('HistoryCtrl', function($scope) {
        //添加搜索框监听
        $("#keyword").on("keyup", function() {
            if((event.keyCode!=38)&&(event.keyCode!=40)&&(event.keyCode!=13)){    //判断键盘事件，抛弃上下键跟回车键
                autoCom();
            }
        });
})

.controller('CommandCtrl', function ($scope) {

        $scope.iconNumber = 0;
        $scope.iconDescription = "";
        $scope.labelCoordinateX = 0;
        $scope.labelCoordinateY = 0;

        $scope.bounds = [[],
                        [121.426311,31.224952,121.428926,31.225847,121.428231,31.228703,121.421652,31.229645,121.42205,31.227167],
                        [121.548108,31.218297,121.555294,31.216444,121.567798,31.220027,121.565786,31.22855,121.552563,31.224474],
                        [121.413794,31.142845,121.417674,31.146306,121.416974,31.14728,121.413219,31.145719,121.413057,31.144637],
                        [121.47507,31.22123,121.477381,31.221831,121.475824,31.224803,121.47392,31.224024,121.473935,31.223205],
                        [121.254998,31.379998,121.258776,31.380183,121.25979,31.380622,121.25593,31.385832,121.25149,31.383304],
                        [121.503849,31.304585,121.505789,31.296809,121.508736,31.294711,121.516784,31.301314,121.512904,31.307609],
                        [121.502855,31.313658,121.503052,31.31227,121.505011,31.309987,121.511389,31.310373,121.509592,31.31372],
                        [121.502631,31.287637,121.511093,31.284235,121.514264,31.290237,121.506584,31.293261,121.503143,31.290291]];
        
        // 百度地图API功能
        var map = new BMap.Map("command_map");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 9);
        //map.addControl(new BMap.MapTypeControl());
        //map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);
        // map.disableDragging();
        var myKeys = [$scope.spotName];
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map, panel:"r-result"},
            pageCapacity:1
        });
        local.searchInBounds(myKeys, map.getBounds());
        map.setZoom(3);
        //单击获取点击的经纬度
        // map.addEventListener("click",function(e){
        //     alert(e.point.lng + "," + e.point.lat);
        // });
        //添加多边形
        if ($scope.bounds[$scope.spotId].length == 10){
            var polygon = new BMap.Polygon([
                new BMap.Point($scope.bounds[$scope.spotId][0],$scope.bounds[$scope.spotId][1]),
                new BMap.Point($scope.bounds[$scope.spotId][2],$scope.bounds[$scope.spotId][3]),
                new BMap.Point($scope.bounds[$scope.spotId][4],$scope.bounds[$scope.spotId][5]),
                new BMap.Point($scope.bounds[$scope.spotId][6],$scope.bounds[$scope.spotId][7]),
                new BMap.Point($scope.bounds[$scope.spotId][8],$scope.bounds[$scope.spotId][9])
            ], {strokeColor:"blue", strokeWeight:2, strokeOpacity:0.5});  //创建多边形
            polygon.addEventListener("click",function(e){
                //alert(e.point.lng + "," + e.point.lat);
                //判断iconNumber
                if ($scope.iconNumber != 0){
                    $scope.labelCoordinateX = e.point.lng;
                    $scope.labelCoordinateY = e.point.lat;
                    var pt = new BMap.Point(e.point.lng,e.point.lat);
                    var myIcon = new BMap.Icon("./img/icon/"+$scope.iconNumber+".png", new BMap.Size(29,29));
                    var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
                    //添加悬浮框按钮
                    var content = $scope.iconDescription;
                        


                    map.addOverlay(marker2);              // 将标注添加到地图中
                    addClickHandler2(content,marker2,$scope.iconNumber);

                    function addClickHandler2(content,marker,iconNumber){
                        
                        marker.addEventListener("click",function(e){
                            if (iconMarkerClickTime != iconNumber){
                                openInfo(content,e);
                                iconMarkerClickTime = iconNumber;
                            }
                            else if(iconMarkerClickTime == iconNumber){
                                map.closeInfoWindow();
                                iconMarkerClickTime = 0;
                            }
                            
                        });
                    }
                    function openInfo(content,e){
                        var p = e.target;
                        var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                        var opts = {
                            width : 20,     // 信息窗口宽度
                            height: 20,     // 信息窗口高度
                            title : "评价信息：" , // 信息窗口标题
                            enableMessage:true,//设置允许信息窗发送短息
                            enableCloseOnClick:true
                        };
                        var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
                        map.openInfoWindow(infoWindow,point); //开启信息窗口
                    }

                    
                    //存入数据库
                    $.ajax({
                        type : "PUT",
                        url : "/spotLabel",
                        data : JSON.stringify({
                            spotId: $scope.spotId,
                            spotLabelType: $scope.iconNumber,
                            spotLabelDescription: $scope.iconDescription,
                            //添加xy坐标
                            //TODO
                            spotLabelCoordinateX: $scope.labelCoordinateX,
                            spotLabelCoordinateY: $scope.labelCoordinateY
                        }),
                        contentType : "application/json; charset=utf-8",
                        dataType : "json",
                        statusCode : {
                            201 : function() {
                                console.log("评论拖动成功");
                            }
                        }
                    });
                }
            });
        map.addOverlay(polygon);   //增加多边形
        }



        //从数据库获取icon
        //TODO
        $.ajax({
            type : "GET",
            url : "/spot/" + $scope.spotId + "/label",
            processData : false,
            contentType : "application/json; charset=utf-8",
            success : function(data) {// data is list<spot>
                for(var i=0; i<data.length; i++){
                    //添加label
                    if (data[i].spotLabelType != 0){
                        var pt = new BMap.Point(data[i].spotLabelCoordinateX, data[i].spotLabelCoordinateY);
                        var myIcon = new BMap.Icon("./img/icon/"+data[i].spotLabelType+".png", new BMap.Size(29,29));
                        var marker2 = new BMap.Marker(pt,{icon:myIcon});  // 创建标注
                        //添加悬浮框按钮
                        var content = data[i].spotLabelDescription;
                            


                        map.addOverlay(marker2);              // 将标注添加到地图中
                        addClickHandler2(content,marker2,data[i].spotLabelType);

                        function addClickHandler2(content,marker,iconNumber){
                            
                            marker.addEventListener("click",function(e){
                                if (iconMarkerClickTime != iconNumber){
                                    openInfo(content,e);
                                    iconMarkerClickTime = iconNumber;
                                }
                                else if(iconMarkerClickTime == iconNumber){
                                    map.closeInfoWindow();
                                    iconMarkerClickTime = 0;
                                }
                                
                            });
                        }
                        function openInfo(content,e){
                            var p = e.target;
                            var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
                            var opts = {
                                width : 20,     // 信息窗口宽度
                                height: 20,     // 信息窗口高度
                                title : "评价信息：" , // 信息窗口标题
                                enableMessage:true,//设置允许信息窗发送短息
                                enableCloseOnClick:true
                            };
                            var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
                            map.openInfoWindow(infoWindow,point); //开启信息窗口
                        }
                    }
                }
            },
        });



        $scope.setIconNumber = function(index, iconDescription){
            $scope.iconNumber = index;
            $scope.iconDescription = iconDescription;
            if ($scope.iconNumber == 5 && $scope.iconDescription == "其他"){
                $scope.iconDescription = $("#otherSuggestion").val();
            }
        }

})


.controller('HereCtrl', function($scope) {

        // 百度地图API功能
        var map = new BMap.Map("here_map");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
})

.controller('mineCtr', function($scope,$state,$rootScope) {
        $rootScope.currentUserId = window.sessionStorage.currentUserId;
        $scope.currentUserName = window.sessionStorage.currentUserName;
        $scope.currentUserEmail = window.sessionStorage.currentUserEmail;
        $scope.currentUserAvatarPath = window.sessionStorage.currentUserAvatarPath;
        console.log("denglu : " + window.sessionStorage.currentUserId);
        $state.go('tabs.mine');

        $(function(){
            var text = "想要玩遍全世界么，惊喜尽在ExcitedMap!"
            $("#share_button").zclip({
                path:'./lib/jquery/ZeroClipboard.swf', //记得把ZeroClipboard.swf引入到项目中 
                copy:function(){
                    return text;
                }
            });
        });
})