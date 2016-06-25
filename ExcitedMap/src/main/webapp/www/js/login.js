
//var currentUserId;


angular.module('userController',['userService'])
  
   .controller('registerCtr',function($scope,$http,$window,$state,checkUser){
      var servurl='http://map.tunnel.qydev.com/user';
      $scope.user={};
      $scope.register=function(){
        
 

          var err=checkUser($scope.user,'signup');
          
          if(err==0){
              $window.alert(err);
      

          }else{           

               
              $http.put(servurl,JSON.stringify({"userName": $scope.user.username,"userEmail":$scope.user.email,"userPassword":$scope.user.password})
            ).then(function successCallback(response){
                               
                      //currentUserId = response.data.userId;
                      $state.go('tabs.login');
                  
              },function errorCallback(response){
                  if(response.status == 408){
                      alert("亲，网络不太给力哦~");
                  } else if(response.status ==401){
                      alert("亲，验证码输错了哦~");
                  } else if(response.status == 403){
                      alert("亲，请先注册哦~");
                  } else  if(response.status == 400){
                      alert("400");
                  }

              });
          }
      };
  })
  //start here











  .controller('loginCtr',function($scope,$http,$window,$state,checkUser){
      var servurl='http://map.tunnel.qydev.com/user/login';
      $scope.user={};
      $scope.login=function(){
        
 

          var err=checkUser($scope.user,'signin');
          
          if(err==0){
              $window.alert(err);
      

          }else{
             $.ajax({
                 type:"POST",
                 url:"http://map.tunnel.qydev.com/user/login?userEmail="+$scope.user.username +"&userPassword="+$scope.user.password +"&userCaptchaCode="+$scope.user.captchacode,
                 processData : false,
                 contentType : "application/json; charset=utf-8",
                 success : function(data){
                     //currentUserId = data.userId;
                     window.sessionStorage.currentUserId = data.userId;
                     alert("userId="+window.sessionStorage.currentUserId);
                     $state.go('tabs.mine');
                 },
                statusCode : {
                    408 : function() {
                        alert("亲，网络不太给力哦~");
                    },
                    401 : function() {
                        alert("亲，验证码输错了哦~");
                    },
                    400 : function() {
                        alert("400");
                    },
                     403 : function() {
                        alert("亲，请先注册哦~");
                    },
                }
            });

       /**         
              $http.post(servurl,JSON.stringify({"userEmail": $scope.user.username,"userPassword":$scope.user.password,"userCaptchaCode":$scope.user.captchacode})
            ).then(function successCallback(response){
                               
                      currentUserId = response.data.userId;
                      $state.go('tabs.home');
                  
              },function errorCallback(response){
                  if(response.status == 408){
                      alert("亲，网络不太给力哦~");
                  } else if(response.status ==401){
                      alert("亲，验证码输错了哦~");
                  } else if(response.status == 403){
                      alert("亲，请先注册哦~");
                  } else  if(response.status == 400){
                      alert("400");
                  }

              });*/
          }
      };
  });
  

