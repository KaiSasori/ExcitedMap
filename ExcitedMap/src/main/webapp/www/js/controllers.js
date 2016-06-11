/**
 * Created by Jinkai on 2016/5/20.
 */
var spotCategoryId = 0;
var listMode = 0;
//history search框功能
var searchString = "wishCount";





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
                        local.searchInBounds($scope.keys1, map.getBounds());
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
                        local.searchInBounds($scope.keys2, map.getBounds());
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

.controller('NearByTabCtrl', function($scope) {
        // 百度地图API功能
        var map = new BMap.Map("nearmap");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);
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


        
        


        $scope.spotList = [];


        //排序方法
        $scope.listSpots = function(){
            console.log("listMode = " + listMode);
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
                $scope.getSpotListOrderByPopularity();
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
                    $state.go('tabs.list.detail_list1');
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
                    $state.go('tabs.list.detail_list1');
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
                    $state.go('tabs.list.detail_list1');
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
                    $state.go('tabs.list.detail_list1');
                },
            });
        };

        //根据popularity获取spotlist，有limit数量限制
        $scope.getSpotListOrderByPopularity = function(){
            $scope.spotList = [];
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
                    $state.go('tabs.list.detail_list1');
                },
            });
        };

        $scope.goSpot = function(spot){
            console.log("yyyyyy");
            console.log(spot.spotId);
        };









})

.controller('DetailCtrl', function($scope) {

        // 百度地图API功能
        var map = new BMap.Map("detailmap");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);
})

.controller('ListCtrl', function($scope, $rootScope){
        $scope.onTabSelected = function(index){
            $rootScope.spotCategoryId = index;
            //spotCategoryId = index;
            console.log("success! : " + spotCategoryId);
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
<<<<<<< Updated upstream

.controller('CommandCtrl', function($scope) {

        // 百度地图API功能
        var map = new BMap.Map("command_map");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);
})

.controller('HereCtrl', function($scope) {

        // 百度地图API功能
        var map = new BMap.Map("here_map");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
})
=======
>>>>>>> Stashed changes
