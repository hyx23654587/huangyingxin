var $username = $("#username");
var $password = $("#password");
var $btn = $("button");

//设置id和密码锁
var namelock = false;
var passlock = false;

//设置正则
var reg = /^[^\d]\w{5,11}$/;
//用户名框失去焦点时验证用户输入id是否符合要求，符合才开锁
$username.blur(function () {
    var val = $username.val();
    if (!(reg.test(val))) {
        namelock = false;
        return;
    } else {
        namelock = true;
    }
})
$password.blur(function () {
    var val = $password.val();
    if (!(reg.test(val))) {
        passlock = false;
        return;
    } else {
        passlock = true;
    }
})
$btn.click(function () {
    if (!(namelock&&passlock)) {
        alert("账户名或密码输入错误，请重新输入");
        return;
    } 
    $.ajax({
        url:"/php/login.php",
        type:"post",
        data:{
            username:$username.val(),
            password:$password.val()
        },
        dataType:"json",
        success:function(data) {
            if (!data.error) {
                location.href = location.hash.slice(1)||"./list.html";
            } else {
                alert("账户名或密码输入错误，请重新输入");
                return;
            }
        }


    })
    
})