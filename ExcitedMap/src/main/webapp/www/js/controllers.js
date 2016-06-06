/**
 * Created by Jinkai on 2016/5/20.
 */
var spotCategoryId = 0;

angular.module('myApp.controllers', [])
.controller('TutorialCtrl', function($scope, $state, $ionicViewService) {
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
})

.controller('HomeTabCtrl', function($scope) {
        console.log('HomeTabCtrl');
        // 百度地图API功能
        var map = new BMap.Map("allmap");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);
})

.controller('NearByTabCtrl', function($scope) {
        // 百度地图API功能
        var map = new BMap.Map("nearmap");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);
})

.controller('AppCtrl', function ($scope, $ionicPopover,$location, $ionicPopup) {

        $scope.login = function(user) {

            if(typeof(user)=='undefined'){
                $scope.showAlert('Please fill username and password to proceed.');
                return false;
            }

            if(user.username=='gjk' && user.password=='gjk'){
                $location.path('/tab/home');
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
})

.controller('DetailCtrl', function($scope) {

        // 百度地图API功能
        var map = new BMap.Map("detailmap");
        map.centerAndZoom(new BMap.Point(121.484, 31.195), 11);
        map.addControl(new BMap.MapTypeControl());
        map.setCurrentCity("上海");
        map.enableScrollWheelZoom(true);
})

.controller('ListCtrl', function($scope){
        $scope.onTabSelected = function(index){
            spotCategoryId = index;
            console.log("success! : " + spotCategoryId);
        };
})
