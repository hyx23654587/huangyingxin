 //前端操作cookie，先获取
 //浏览器没有给操作cookie的api，自己封装方法
 function getCookie(key) {
     var cookieStr = document.cookie;
     var arr = cookieStr.split("; ");
     for (var i = 0; i < arr.length; i++) {
         var subArr = arr[i].split("=");
         if (subArr[0] === key) {
             return subArr[1];
         }
     }
 }
 var islogin = getCookie("islogin");
 if (!islogin) {
     location.href = "./login.html#" + location.herf
 }

 function setCookie(key, value) {
     document.cookie = key + "=" + value;
 }

 function clearCookie(key) {
     document.cookie = key + "=" + "aaa;max-age=-1"
 }