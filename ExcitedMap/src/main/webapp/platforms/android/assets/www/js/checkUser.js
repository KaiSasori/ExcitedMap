angular.module('userService',[])
    .factory('checkUser',function(){
    //检查用户登陆和注册时填写的格式
    function checkUserName(str, minLen, maxLen) {
        var reg = /^[(\u4e00-\u9fa5)a-z][(\u4e00-\u9fa5)a-zA-Z0-9_]{1,15}$/;
        var len = str.length;
        return reg.test(str) && len >= minLen && len <= maxLen;
    }

    function checkEmail(str) {
        var reg = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
        return reg.test(str) && str.length >= 6 && str.length <= 64;
    }

    return function(user,option) {
        if(!user.username) {
            alert("用户名缺省");
            return 0;}
        if(!user.password) {
            alert("密码缺省");
            return 0;}
        
       
        if(option=='signup'){
            if(!user.email) {
                alert("Email缺省");
                return '0';}
            if(!user.repeatPassword) {
                alert("重复密码缺省");
                return '0';}
            if(!checkEmail(user.email)) {
                alert("Email格式错误");
                return '0';}
            if(user.password!==user.repeatPassword) {
                alert("密码不一致");
                return '0';}
        }
        return 1;
    };
    })
    ;

