"use strict";var $username=$("#username"),$password=$("#password"),$button=$("button"),reg=/^[^\d]\w{5,11}$/,namelock=!1,passlock=!1;$username.blur(function(){var s=$username.val();if(!reg.test(s))return $username.css("backgroundColor","red"),$("#nameno").removeClass(),void(namelock=!1);$.ajax({url:"/php/checkusername.php",type:"get",data:{username:s},dataType:"json",success:function(s){s.error?(namelock=!1,$username.css("backgroundColor","red"),$("#nameno").removeClass()):(namelock=!0,$username.css("backgroundColor",""),$("#nameno").addClass("none"))}})}),$password.blur(function(){var s=$password.val();if(!reg.test(s))return $password.css("backgroundColor","red"),$("#passno").removeClass(),void(passlock=!1);$password.css("backgroundColor",""),$("#passno").addClass("none"),passlock=!0}),$button.click(function(){namelock&&passlock&&$.ajax({url:"/php/regist.php/",type:"post",data:{username:$username.val(),password:$password.val()},dataType:"json",success:function(s){s.error?alert("注册失败"):location.href="./login.html"}})});